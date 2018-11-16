import { BaseEntity } from "./base/BaseEntity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { RodadaTesteStep } from "./RodadaTesteStep";
import { Projeto } from "./Projeto";

@Entity()
export class RodadaTeste extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "data_inicio_execucao"})
    dataInicioExecucao: Date;

    @Column({name: "data_fim_execucao"})
    dataFimExecucao: Date;

    @ManyToOne(type => Projeto, projeto => projeto.cenarios)
    @JoinColumn({ name: "projeto_id" })
    projeto: Projeto;

    @OneToMany(type => RodadaTesteStep, rodadaTesteStep => rodadaTesteStep.rodadaTeste)
    rodadaTesteStep: RodadaTesteStep;

    constructor(projeto: Projeto) {
        super();
        this.projeto = projeto
        this.dataInicioExecucao = new Date();
    }
}