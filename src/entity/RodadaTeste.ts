import { BaseEntity } from "./base/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { RodadaTesteStep } from "./RodadaTesteStep";

@Entity()
export class RodadaTeste extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "data_inicio_execucao"})
    dataInicioExecucao: Date;

    @Column({name: "data_fim_execucao"})
    dataFimExecucao: Date;

    @OneToMany(type => RodadaTesteStep, rodadaTesteStep => rodadaTesteStep.rodadaTeste)
    rodadaTesteStep: RodadaTesteStep;

    constructor() {
        super()
        this.dataInicioExecucao = new Date();
    }
}