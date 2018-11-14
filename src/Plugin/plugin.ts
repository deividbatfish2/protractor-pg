import {ProtractorPlugin} from 'protractor';
import { ProjetoRepository } from '../repository/projeto.repository';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { CenarioRepository } from '../repository/cenario.repository';
import { Cenario } from '../entity/Cenario';
import { ConfigConnection } from '../connection/configConnection';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: any): Promise<void> {
        console.log("aqui 2")
        const configConnection = new ConfigConnection()
        await configConnection.getNewConnection()
        const cenarioRepositorio = new CenarioRepository();
        const cenario = new Cenario("Emissão de notas para RJ", ProjectSingleton.getDefault());
        let teste = await cenarioRepositorio.save(cenario);
        await configConnection.closeConnection()
        console.log(teste)
        /*console.log("Passou: ", passed);
        console.log("Info: ", testInfo);*/
    },
    async initializer(projectName: string, descricao: string): Promise<void> {
        const configConnection = new ConfigConnection()
        await configConnection.getNewConnection()
        const projetoRepositorio = new ProjetoRepository();
        let projeto = new Projeto(projectName, descricao);
        let projetoCriado = await projetoRepositorio.save(projeto);
        await configConnection.closeConnection();
        ProjectSingleton.default = projetoCriado;
        console.log("aqui 1")
    }
}

export = protractorPg;