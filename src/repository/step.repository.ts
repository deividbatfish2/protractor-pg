import { Repository, getRepository } from "typeorm";
import { Step } from "../entity/Step";

export class StepRepository {
    
    private repository: Repository<Step>;

    constructor() {
        this.repository = getRepository(Step)
    }

    save(step: Step): Promise<Step> {
        return this.repository.save(step);
    }
}