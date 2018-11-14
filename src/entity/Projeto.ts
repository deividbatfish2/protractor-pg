import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Cenario } from './Cenario';

@Entity()
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @OneToMany(type => Cenario, cenario => cenario.projeto)
    cenarios: Array<Cenario>;

    constructor(nome: string, descricao: string) {
        this.nome = nome;
        this.descricao = descricao;
    }
}