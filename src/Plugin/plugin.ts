import {ProtractorPlugin} from 'protractor';
import { ProjetoRepository } from '../repository/projeto.repository';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { CenarioRepository } from '../repository/cenario.repository';
import { Cenario } from '../entity/Cenario';
import { ConfigConnection } from '../connection/configConnection';
import {Info} from '../model/info'
import { ProjetoService } from '../service/ProjetoService';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: Info): Promise<void> {
        const configConnection = new ConfigConnection()
        await configConnection.getNewConnection()
        const cenarioRepositorio = new CenarioRepository();
        const cenario = new Cenario(testInfo.name, ProjectSingleton.getDefault());
        await cenarioRepositorio.save(cenario);
        await configConnection.closeConnection()
    },
    async initializer(projectName: string, descricao: string): Promise<void> {

        const projetoService = new ProjetoService()
        const projeto = new Projeto(projectName, descricao);

        ProjectSingleton.default = await projetoService.criarProjetoSeNaoExiste(projeto) || projeto;
        console.log(ProjectSingleton.getDefault())
    }
}

export = protractorPg;