import { RepositoryFactory } from "../../repository/factory/RepositoryFactory";
import { BaseEntity } from "../../entity/base/BaseEntity";
import { BaseRepository } from "../../repository/base/Base.repository";

export abstract class BaseService<T extends BaseEntity> {
    
    private repository: any;

    constructor(private entity: T) {}

    async criarEntidadeSeNaoExiste(): Promise<T | undefined> {
        const entidadeExistente = await this.entidadeExiste();
        
        this.repository = await RepositoryFactory.getRepository(this.entity);

        if(!entidadeExistente) {
            const entidadeCriado =  await this.repository.save();
            return entidadeCriado;
        }
        return <T>entidadeExistente
    }

    private async entidadeExiste(): Promise<boolean | T> {

        this.repository = await RepositoryFactory.getRepository(this.entity);

        const entidadeExiste = await this.repository.findOne(this.entity);
        if(entidadeExiste) {
            return entidadeExiste;
        }
        return false;
    }
}