import { Projeto } from "../../entity/Projeto";
import { ProjetoRepository } from "../projeto.repository";
import { Cenario } from "../../entity/Cenario";
import { CenarioRepository } from "../cenario.repository";
import { Step } from "../../entity/Step";
import { StepRepository } from "../step.repository";
import { ConfigConnection } from "../../connection/configConnection";
import { BaseEntity } from "../../entity/base/BaseEntity";

export class RepositoryFactory {

    static async getRepository(entity: BaseEntity) {

        await ConfigConnection.getNewConnection();

        switch (entity.constructor) {
            case Projeto:
                return new ProjetoRepository(entity);
            case Cenario:
                return new CenarioRepository(entity);
            case Step:
                return new StepRepository(entity);

            default: throw new Error("Entidade não Reconhecida")
        }
    }
}