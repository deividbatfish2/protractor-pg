import { Projeto } from "./Projeto";
import { Step } from "./Step";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from "typeorm";

@Entity()
export class Cenario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string

    @ManyToOne(type => Projeto, projeto => projeto.cenarios)
    projeto: Projeto;

    @OneToMany(type => Step, step => step.cenario)
    steps: Array<Step>;

    constructor(descricao: string, projeto: Projeto) {
        this.descricao = descricao;
        this.projeto = projeto;
    }
}