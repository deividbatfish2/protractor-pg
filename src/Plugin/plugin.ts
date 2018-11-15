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

        const cenarioService = new CenarioService();
        const cenario = new Cenario(testInfo.name, ProjectSingleton.getDefault());
        const cenarioCriado = await cenarioService.criaCenarioseNaoExiste(cenario) || cenario;

        const stepService = new StepService();
        const result = passed? "SIM":"NAO";
        const step = new Step(testInfo.category, result, cenarioCriado);
        await stepService.criaStepseNaoExiste(step);
    },
    async initializer(projectName: string, descricao: string): Promise<void> {

        const projetoService = new ProjetoService()
        const projeto = new Projeto(projectName, descricao);

        ProjectSingleton.default = await projetoService.criarProjetoSeNaoExiste(projeto) || projeto;
    }
}

export = protractorPg;