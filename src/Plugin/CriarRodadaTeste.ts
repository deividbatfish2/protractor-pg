import { Info } from "../model/info";
import { Cenario } from "../entity/Cenario";
import { ProjectSingleton } from "../model/project.singletom";
import { CenarioService } from "../service/Cenario.service";
import { Step } from "../entity/Step";
import { StepService } from "../service/Step.service";
import { RodadaTesteStep } from "../entity/RodadaTesteStep";
import { RodadaTesteSingleton } from "../model/rodadaTeste.singletom";
import { RodadaTesteStepService } from "../service/RodadaTesteStep.service";
import { ResultadoStep } from "./enum/ResultadoStep.enum";
import { TransformBooleanToEnum } from "./enum/TranformBooleanToEnum";

export class CriarRodadaTeste {
    constructor(private passed: boolean, private testInfo: Info) {}

    async gerarRodada(): Promise<void> {
        const cenarioCriado = await this.criarCenario();
        const step = await this.criarStep(cenarioCriado);

        const result = TransformBooleanToEnum.transform(this.passed)

        await this.finalizaRodada(step, result);
    }

    private async criarCenario(): Promise<Cenario> {
        const cenario = new Cenario(this.testInfo.category, ProjectSingleton.getDefault());
        const cenarioService = new CenarioService(cenario);
        const cenarioCriado = await cenarioService.criarObejetoSeNaoExiste() || cenario;
        return cenarioCriado
    }

    private async criarStep(cenarioCriado: Cenario): Promise<Step> {
        const step = new Step(this.testInfo.name, cenarioCriado);
        const stepService = new StepService(step);
        const stepCriado = await stepService.criarObejetoSeNaoExiste() || step;
        return stepCriado;
    }

    private async finalizaRodada(step: Step, result: ResultadoStep) {
        const rodadaResult = new RodadaTesteStep(RodadaTesteSingleton.getDefault(), step, result);
        const rodadaResultService = new RodadaTesteStepService(rodadaResult);
        await rodadaResultService.criarObejetoSeNaoExiste();
    }
}