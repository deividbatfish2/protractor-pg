import { BaseEntity } from "../../entity/base/BaseEntity";
import { Repository, getRepository } from "typeorm";

export abstract class BaseRepository<T extends BaseEntity> {

    private repository: Repository<T>

    constructor(private entity: BaseEntity) {
        this.repository = getRepository(entity.constructor);
    }

    save(): Promise<BaseEntity> {
        return this.repository.save(this.entity);
    }

    findOne(condition: Object): Promise< T | undefined> {
        return this.repository.findOne(condition);
    }
}