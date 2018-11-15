import { BaseEntity } from "./base/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RodadaTeste } from "./RodadaTeste";
import { Step } from "./Step";

@Entity()
export class RodadaTesteStep extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => RodadaTeste, rodadaTeste => rodadaTeste.rodadaTesteStep)
    rodadaTeste: RodadaTeste

    @ManyToOne(type => Step, step => step.rodadaTesteStep)
    step: Step

    @Column()
    resultado: string;

    constructor(rodadaDeTeste: RodadaTeste, step: Step, resultado: string) {
        super()
        this.rodadaTeste = rodadaDeTeste;
        this.step = step;
        this.resultado = resultado
    }
}