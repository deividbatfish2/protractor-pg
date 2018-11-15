import { StepRepository } from "../repository/step.repository";
import { Step } from "../entity/Step";
import { ConfigConnection } from "../connection/configConnection";

export class StepService {

    private stepRepository: StepRepository;

    async criaStepseNaoExiste(step: Step): Promise<Step | undefined> {

        const existe = await this.existeStep(step);

        await ConfigConnection.getNewConnection();
        this.stepRepository = new StepRepository();

        if (!existe) {

            const stepCriado = await this.stepRepository.save(step);
            return stepCriado
        }

        const stepExistente = await this.stepRepository.findOne(step);

        return stepExistente;
    }

    private async existeStep(step: Step): Promise<boolean> {

        await ConfigConnection.getNewConnection();
        this.stepRepository = new StepRepository();

        const stepExiste = await this.stepRepository.findOne(step);

        if (!stepExiste) {
            return false
        }
        return true
    }

}