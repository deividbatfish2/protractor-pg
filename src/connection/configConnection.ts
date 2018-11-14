import { Connection, createConnection } from "typeorm";

export class ConfigConnection {

    private static connection: Connection

    constructor() {}

    static async getNewConnection(): Promise<Connection> {
        if(!this.connection) {

            this.connection = await createConnection({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "root",
                password: "admin",
                database: "pluginteste",
                logging: true,
                entities: [
                    "./**/dist/entity/**/*.js"
                ],
                migrations: [
                    "./**/dist/migration/**/*.js"
                ],
                cli: {
                    migrationsDir: "../src/migration"
                }
            });
        }
        return this.connection;
    }

    static async closeConnection(): Promise<void> {
        return this.connection.close()
    }
}