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
    "descricao" TEXT NOT NULL,
    "cenarioId" INTEGER REFERENCES cenario
);

CREATE TABLE rodada_teste
(
    "id" SERIAL PRIMARY KEY,
    "dataExecucao" TIMESTAMP NOT NULL
);

CREATE TABLE rodada_teste_step
(
    "id" SERIAL PRIMARY KEY,
    "rodadaTesteId" INTEGER REFERENCES rodadaTeste,
    "stepId" INTEGER REFERENCES step,
    "resultado" TEXT
);