import { MigrationInterface, QueryRunner } from "typeorm";

export class createDataBase1542130034084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`
        CREATE TABLE projeto
        (
            "id" SERIAL PRIMARY KEY,
            "nome" VARCHAR(100) NOT NULL,
            "descricao" TEXT
        );
        
        CREATE TABLE cenario
        (
            "id" SERIAL PRIMARY KEY,
            "descricao" TEXT NOT NULL,
            "projeto_id" INTEGER REFERENCES projeto
        );
        
        CREATE TABLE step
        (
            "id" SERIAL PRIMARY KEY,
            "descricao" TEXT NOT NULL,
            "cenario_id" INTEGER REFERENCES cenario
        );
        
        CREATE TABLE rodada_teste
        (
            "id" SERIAL PRIMARY KEY,
            "dataExecucao" TIMESTAMP NOT NULL
        );
        
        CREATE TABLE rodada_teste_step
        (
            "id" SERIAL PRIMARY KEY,
            "rodada_teste_id" INTEGER REFERENCES rodada_teste,
            "step_id" INTEGER REFERENCES step,
            "resultado" TEXT
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        queryRunner.query(`
        DROP TABLE IF EXISTS rodada_teste_step, rodada_teste, step, cenario, projeto CASCADE;
        `)
    }

}
