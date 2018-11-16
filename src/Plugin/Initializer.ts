import { Projeto } from "../entity/Projeto";
import { ProjetoService } from "../service/Projeto.service";
import { ProjectSingleton } from "../model/project.singletom";
import { RodadaTeste } from "../entity/RodadaTeste";
import { RodadaTesteService } from "../service/RodadaTeste.service";
import { RodadaTesteSingleton } from "../model/rodadaTeste.singletom";

export class Initializer {

    constructor(private projectName: string, private descricao: string) {}

    async inicializarRodadaDeTeste() {

        await this.inicializarProjetoDeTeste();

        await this.iniciarRodadaDeTeste()
    }

    private async inicializarProjetoDeTeste() {
        const projeto = new Projeto(this.projectName, this.descricao);
        const projetoService = new ProjetoService(projeto)
        
        ProjectSingleton.default = await projetoService.criarObejetoSeNaoExiste() || projeto;
    }

    private async iniciarRodadaDeTeste() {
        const rodadaTeste = new RodadaTeste(ProjectSingleton.getDefault());
        const rodadaTesteService = new RodadaTesteService(rodadaTeste)
        RodadaTesteSingleton.default = await rodadaTesteService.criarObejetoSeNaoExiste() || rodadaTeste
    }
}