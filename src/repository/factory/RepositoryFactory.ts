import { Projeto } from "../../entity/Projeto";
import { ProjetoRepository } from "../projeto.repository";
import { Cenario } from "../../entity/Cenario";
import { CenarioRepository } from "../cenario.repository";
import { Step } from "../../entity/Step";
import { StepRepository } from "../step.repository";
import { ConfigConnection } from "../../connection/configConnection";

export class RepositoryFactory {

    static async getRepository(entity: any) {

        await ConfigConnection.getNewConnection();

        switch (entity.constructor) {
            case Projeto:
                return new ProjetoRepository();
            case Cenario:
                return new CenarioRepository();
            case Step:
                return new StepRepository();

            default: throw new Error("Entidade não Reconhecida")
        }
    }
}