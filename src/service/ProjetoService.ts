import { ProjetoRepository } from "../repository/projeto.repository";
import { Projeto } from "../entity/Projeto";
import { ConfigConnection } from "../connection/configConnection";

export class ProjetoService {

    private projetoRepository: ProjetoRepository;
    private configConnection: ConfigConnection;

    constructor() {
        this.configConnection = new ConfigConnection();      
    }

    async criarProjetoSeNaoExiste(projeto: Projeto): Promise<Projeto | undefined> {
        const existe = await this.projetoExiste(projeto);
        await this.configConnection.getNewConnection();
        this.projetoRepository = new ProjetoRepository();
        
        if(!existe) {
            const projetoCriado =  await this.projetoRepository.save(projeto);
            return projetoCriado;
        }

        const projetoExistente = await this.projetoRepository.findOne(projeto)
        await this.configConnection.closeConnection();
        return projetoExistente
    }

    private async projetoExiste(projeto: Projeto): Promise<boolean> {
        await this.configConnection.getNewConnection();
        this.projetoRepository = new ProjetoRepository();
        const existe = await this.projetoRepository.findOne(projeto);
        await this.configConnection.closeConnection();
        if(existe) {
            return true
        }
        return false
    }
}