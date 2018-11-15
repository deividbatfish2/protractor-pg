import { Projeto } from "../../entity/Projeto";
import { ProjetoRepository } from "../Projeto.repository";
import { Cenario } from "../../entity/Cenario";
import { CenarioRepository } from "../Cenario.repository";
import { Step } from "../../entity/Step";
import { StepRepository } from "../Step.repository";
import { ConfigConnection } from "../../connection/configConnection";
import { BaseEntity } from "../../entity/base/BaseEntity";
import { RodadaTeste } from "../../entity/RodadaTeste";
import { RodadaTesteRepository } from "../RodadaTeste.repository";
import { RodadaTesteStep } from "../../entity/RodadaTesteStep";
import { RodadaTesteStepRepository } from "../RodadaTesteStep.repository";

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
            case RodadaTeste:
                return new RodadaTesteRepository(entity);
            case RodadaTesteStep:
                return new RodadaTesteStepRepository(entity);

            default: throw new Error("Entidade não Reconhecida")
        }
    }
}