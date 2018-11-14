import { Projeto } from "../entity/Projeto";

export class ProjectSingleton {
    public _project: Projeto;

    private constructor(projeto: Projeto){
        this._project = projeto;
    }

    private static _default: ProjectSingleton;

    static getDefault(): Projeto {
        return ProjectSingleton._default._project;
    }

    static set default(projeto: Projeto) {
        if (!ProjectSingleton._default) {
            ProjectSingleton._default = new ProjectSingleton(projeto);
        }
    }

}