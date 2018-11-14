import {ProtractorPlugin} from 'protractor';
import { ProjetoRepository } from '../repository/projeto.repository';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { CenarioRepository } from '../repository/cenario.repository';
import { Cenario } from '../entity/Cenario';
import { ConfigConnection } from '../connection/configConnection';
import {Info} from '../model/info'

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
        const configConnection = new ConfigConnection()
        await configConnection.getNewConnection()
        const projetoRepositorio = new ProjetoRepository();
        let projeto = new Projeto(projectName, descricao);
        let projetoCriado = await projetoRepositorio.save(projeto);
        await configConnection.closeConnection();
        ProjectSingleton.default = projetoCriado;
    }
}

export = protractorPg;