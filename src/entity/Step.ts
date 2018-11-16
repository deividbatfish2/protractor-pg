import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Cenario } from "./Cenario";
import { BaseEntity } from "./base/BaseEntity";
import { RodadaTesteStep } from "./RodadaTesteStep";

@Entity()
export class Step extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @ManyToOne(type => Cenario, cenario => cenario.steps)
    @JoinColumn({name: "cenario_id"})
    cenario: Cenario;

    @OneToMany(type => RodadaTesteStep, rodadaTesteStep => rodadaTesteStep.step)
    rodadaTesteStep: RodadaTesteStep

    constructor(descricao: string, cenario: Cenario) {
        super()
        this.descricao = descricao;
        this.cenario = cenario;
    }
}