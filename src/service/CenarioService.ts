import { CenarioRepository } from "../repository/cenario.repository";
import { Cenario } from "../entity/Cenario";
import { ConfigConnection } from "../connection/configConnection";

export class CenarioService {

    private cenarioRepository: CenarioRepository;

    async criaCenarioseNaoExiste(cenario: Cenario): Promise<Cenario | undefined> {

        const existe = await this.existeCenario(cenario);

        await ConfigConnection.getNewConnection();
        this.cenarioRepository = new CenarioRepository();

        if (!existe) {

            const cenarioCriado = await this.cenarioRepository.save(cenario);
            return cenarioCriado
        }

        const cenarioExistente = await this.cenarioRepository.findOne(cenario);

        return cenarioExistente;
    }

    private async existeCenario(cenario: Cenario): Promise<boolean> {

        await ConfigConnection.getNewConnection();
        this.cenarioRepository = new CenarioRepository();

        const cenarioExiste = await this.cenarioRepository.findOne(cenario);

        if (!cenarioExiste) {
            return false
        }
        return true
    }

}