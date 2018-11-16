import { ResultadoStep } from "./ResultadoStep.enum";

export class TransformBooleanToEnum {
    static transform(boleano: Boolean): ResultadoStep {
        return boleano? ResultadoStep.PASSOU: ResultadoStep.FALHOU
    }
}