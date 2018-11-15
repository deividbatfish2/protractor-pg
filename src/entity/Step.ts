import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cenario } from "./Cenario";
import { BaseEntity } from "./base/BaseEntity";

@Entity()
export class Step extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    resultado: string;

    @ManyToOne(type => Cenario, cenario => cenario.steps)
    cenario: Cenario;

    constructor(nome: string, resultado: string, cenario: Cenario) {
        super()
        this.nome = nome;
        this.resultado = resultado;
        this.cenario = cenario;
    }
}