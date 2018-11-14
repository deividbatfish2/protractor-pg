import {ProtractorPlugin} from 'protractor';
import { ProjetoRepository } from '../repository/projeto.repository';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { CenarioRepository } from '../repository/cenario.repository';
import { Cenario } from '../entity/Cenario';
import { ConfigConnection } from '../connection/configConnection';
import {Info} from '../model/info'
import { ProjetoService } from '../service/ProjetoService';
import { CenarioService } from '../service/CenarioService';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: Info): Promise<void> {

        const cenarioService = new CenarioService();
        const cenario = new Cenario(testInfo.name, ProjectSingleton.getDefault());
        await cenarioService.criaCenarioseNaoExiste(cenario);
    },
    async initializer(projectName: string, descricao: string): Promise<void> {

        const projetoService = new ProjetoService()
        const projeto = new Projeto(projectName, descricao);

        ProjectSingleton.default = await projetoService.criarProjetoSeNaoExiste(projeto) || projeto;
    }
}

export = protractorPg;