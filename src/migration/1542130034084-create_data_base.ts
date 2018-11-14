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
            "projetoId" INTEGER REFERENCES projeto
        );

        CREATE TABLE step
        (
            "id" SERIAL PRIMARY KEY,
            "nome" VARCHAR(100) NOT NULL,
            "resultado" TEXT,
            "cenarioId" INTEGER REFERENCES cenario
        );
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
