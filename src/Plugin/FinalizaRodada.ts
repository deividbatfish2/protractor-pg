import { RodadaTesteService } from "../service/RodadaTeste.service";
import { RodadaTesteSingleton } from "../model/rodadaTeste.singletom";

export class FinalizaRodada {
    async finalizar(): Promise<void> {
        
        const rodadaTeste = RodadaTesteSingleton.getDefault();
        rodadaTeste.dataFimExecucao = new Date();

        const rodadaTesteService = new RodadaTesteService(rodadaTeste)

        await rodadaTesteService.atualizarObjeto();
    }
}