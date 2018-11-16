import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Cenario } from './Cenario';
import { BaseEntity } from './base/BaseEntity';
import { RodadaTeste } from './RodadaTeste';

@Entity()
export class Projeto extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @OneToMany(type => Cenario, cenario => cenario.projeto)
    cenarios: Array<Cenario>;

    @OneToMany(type => RodadaTeste, rodadaDeTeste => rodadaDeTeste.projeto)
    rodadasDeTeste: Array<RodadaTeste>;

    constructor(nome: string, descricao: string) {
        super()
        this.nome = nome;
        this.descricao = descricao;
    }
}