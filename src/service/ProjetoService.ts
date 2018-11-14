import { ProjetoRepository } from "../repository/projeto.repository";
import { Projeto } from "../entity/Projeto";
import { ConfigConnection } from "../connection/configConnection";

export class ProjetoService {

    private projetoRepository: ProjetoRepository;

    async criarProjetoSeNaoExiste(projeto: Projeto): Promise<Projeto | undefined> {
        const existe = await this.projetoExiste(projeto);

        await ConfigConnection.getNewConnection();
        this.projetoRepository = new ProjetoRepository();
        
        if(!existe) {
            const projetoCriado =  await this.projetoRepository.save(projeto);
            return projetoCriado;
        }

        const projetoExistente = await this.projetoRepository.findOne(projeto)

        return projetoExistente
    }

    private async projetoExiste(projeto: Projeto): Promise<boolean> {

        await ConfigConnection.getNewConnection();
        this.projetoRepository = new ProjetoRepository();
        const existe = await this.projetoRepository.findOne(projeto);
        if(existe) {
            return true
        }
        return false
    }
}