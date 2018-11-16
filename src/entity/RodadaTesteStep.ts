import { BaseEntity } from "./base/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { RodadaTeste } from "./RodadaTeste";
import { Step } from "./Step";
import { ResultadoStep } from "../Plugin/enum/ResultadoStep.enum";

@Entity()
export class RodadaTesteStep extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => RodadaTeste, rodadaTeste => rodadaTeste.rodadaTesteStep)
    @JoinColumn({name: "rodada_teste_id"})
    rodadaTeste: RodadaTeste

    @ManyToOne(type => Step, step => step.rodadaTesteStep)
    @JoinColumn({name: "step_id"})
    step: Step

    @Column()
    resultado: ResultadoStep;

    constructor(rodadaDeTeste: RodadaTeste, step: Step, resultado: ResultadoStep) {
        super()
        this.rodadaTeste = rodadaDeTeste;
        this.step = step;
        this.resultado = resultado
    }
}