import {ProtractorPlugin} from 'protractor';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { Cenario } from '../entity/Cenario';
import {Info} from '../model/info'
import { ProjetoService } from '../service/ProjetoService';
import { CenarioService } from '../service/CenarioService';
import { StepService } from '../service/StepService';
import { Step } from '../entity/Step';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: Info): Promise<void> {

        const cenario = new Cenario(testInfo.category, ProjectSingleton.getDefault());
        const cenarioService = new CenarioService(cenario);
        const cenarioCriado = await cenarioService.criarEntidadeSeNaoExiste() || cenario;

        const result = passed? "SIM":"NAO";
        const step = new Step(testInfo.name, result, cenarioCriado);
        const stepService = new StepService(step);
        await stepService.criarEntidadeSeNaoExiste();
    },
    async initializer(projectName: string, descricao: string): Promise<void> {

        const projeto = new Projeto(projectName, descricao);
        const projetoService = new ProjetoService(projeto)
        
        ProjectSingleton.default = await projetoService.criarEntidadeSeNaoExiste() || projeto;
    }
}

export = protractorPg;