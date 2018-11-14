import { Projeto } from "../entity/Projeto";
import { getRepository, Repository } from "typeorm";

export class ProjetoRepository {

    private repository: Repository<Projeto>

    constructor() {
        this.repository = getRepository(Projeto);
    }

    public save(projeto: Projeto): Promise<Projeto> {
        return this.repository.save(projeto);
    }


}