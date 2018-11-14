import { Connection, createConnection } from "typeorm";

export class ConfigConnection {

    private connection: Connection

    constructor() {}

    async getNewConnection(): Promise<Connection> {
        this.connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "root",
            password: "admin",
            database: "pluginteste",
            logging: true,
            entities: [
                "dist/entity/**/*.js"
            ],
            migrations: [
                "../migration/**/*.js"
            ],
            cli: {
                migrationsDir: "../src/migration"
            }
        });
        return this.connection;
    }

    async closeConnection(): Promise<void> {
        return this.connection.close()
    }
}