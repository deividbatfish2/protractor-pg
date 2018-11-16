import { Projeto } from "./Projeto";
import { Step } from "./Step";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, JoinColumn } from "typeorm";
import { BaseEntity } from "./base/BaseEntity";

@Entity()
export class Cenario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string

    @ManyToOne(type => Projeto, projeto => projeto.cenarios)
    @JoinColumn({ name: "projeto_id" })
    projeto: Projeto;

    @OneToMany(type => Step, step => step.cenario)
    steps: Array<Step>;

    constructor(descricao: string, projeto: Projeto) {
        super()
        this.descricao = descricao;
        this.projeto = projeto;
    }
}