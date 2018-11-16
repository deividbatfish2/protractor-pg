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
import { Initializer } from './Initializer';
import { CriarRodadaTeste } from './CriarRodadaTeste';
import { FinalizaRodada } from './FinalizaRodada';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: Info): Promise<void> {

        const criaRodada = new CriarRodadaTeste(passed, testInfo);

        await criaRodada.gerarRodada();
    },
    async postResults(): Promise<void> {
        console.log("Comecei o post");
        const finalizaRodadaTeste = new FinalizaRodada();
        await finalizaRodadaTeste.finalizar();
        console.log("Finalizei o post");
    },
    async initializer(projectName: string, descricao: string): Promise<void> {

        const initializer = new Initializer(projectName, descricao);

        await initializer.inicializarRodadaDeTeste();
    }
}

export = protractorPg;