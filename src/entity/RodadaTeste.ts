import { BaseEntity } from "./base/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { RodadaTesteStep } from "./RodadaTesteStep";

@Entity()
export class RodadaTeste extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dataExecucao: Date;

    @OneToMany(type => RodadaTesteStep, rodadaTesteStep => rodadaTesteStep.rodadaTeste)
    rodadaTesteStep: RodadaTesteStep;

    constructor() {
        super()
        this.dataExecucao = new Date();
    }
}