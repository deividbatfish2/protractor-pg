import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Cenario } from "./Cenario";

@Entity()
export class Step {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    resultado: string;

    @ManyToOne(type => Cenario, cenario => cenario.steps)
    cenario: Cenario;

}