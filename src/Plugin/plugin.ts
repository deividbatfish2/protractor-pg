import {ProtractorPlugin} from 'protractor';
import {createConnection, Connection} from "typeorm";
import { ProjetoRepository } from '../repository/projeto.repository';
import { Projeto } from '../entity/Projeto';
import { ProjectSingleton } from '../model/project.singletom';
import { CenarioRepository } from '../repository/cenario.repository';
import { Cenario } from '../entity/Cenario';

const protractorPg: ProtractorPlugin | any = {
    async postTest(passed: boolean, testInfo: any): Promise<void> {
        
        const connection: Connection = await createConnection();
        const cenarioRepositorio = new CenarioRepository();
        const cenario = new Cenario("Emissão de notas para RJ", ProjectSingleton.getDefault());
        let teste = await cenarioRepositorio.save(cenario);
        await connection.close()
        console.log(teste)
        /*console.log("Passou: ", passed);
        console.log("Info: ", testInfo);*/
    },
    async initializer(projectName: string, descricao: string): Promise<void> {
        const connection: Connection = await createConnection();
        const projetoRepositorio = new ProjetoRepository();
        let projeto = new Projeto(projectName, descricao);
        let projetoCriado = await projetoRepositorio.save(projeto);
        await connection.close();
        ProjectSingleton.default = projetoCriado;
    }
}

export = protractorPg;