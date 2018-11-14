import { Repository, getRepository } from "typeorm";
import { Cenario } from "../entity/Cenario";

export class CenarioRepository {
    
    private repository: Repository<Cenario>;

    constructor() {
        this.repository = getRepository(Cenario)
    }

    save(cenario: Cenario): Promise<Cenario> {
        return this.repository.save(cenario);
    }
}