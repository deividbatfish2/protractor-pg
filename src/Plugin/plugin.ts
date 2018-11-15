import {ProtractorPlugin} from 'protractor';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { Cenario } from '../entity/Cenario';
import {Info} from '../model/info'
import { ProjetoService } from '../service/Projeto.service';
import { CenarioService } from '../service/Cenario.service';
import { StepService } from '../service/Step.service';
import { Step } from '../entity/Step';
import { RodadaTeste } from '../entity/RodadaTeste';
import { RodadaTesteService } from '../service/RodadaTeste.service';
import { RodadaTesteSingleton } from '../model/rodadaTeste.singletom';
import { RodadaTesteStep } from '../entity/RodadaTesteStep';
import { RodadaTesteStepService } from '../service/RodadaTesteStep.service';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: Info): Promise<void> {

        const cenario = new Cenario(testInfo.category, ProjectSingleton.getDefault());
        const cenarioService = new CenarioService(cenario);
        const cenarioCriado = await cenarioService.criarEntidadeSeNaoExiste() || cenario;

        const result = passed? "SIM":"NAO";
        let step = new Step(testInfo.name, cenarioCriado);
        const stepService = new StepService(step);
        step = await stepService.criarEntidadeSeNaoExiste() || step;

        const rodadaResult = new RodadaTesteStep(RodadaTesteSingleton.getDefault(), step, result);
        const rodadaResultService = new RodadaTesteStepService(rodadaResult);
        await rodadaResultService.criarEntidadeSeNaoExiste();
    },
    async initializer(projectName: string, descricao: string): Promise<void> {

        const projeto = new Projeto(projectName, descricao);
        const projetoService = new ProjetoService(projeto)
        
        ProjectSingleton.default = await projetoService.criarEntidadeSeNaoExiste() || projeto;

        const rodadaTeste = new RodadaTeste();
        const rodadaTesteService = new RodadaTesteService(rodadaTeste)
        RodadaTesteSingleton.default = await rodadaTesteService.criarEntidadeSeNaoExiste() || rodadaTeste
    }
}

export = protractorPg;