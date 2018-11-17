import { Connection, createConnection, DatabaseType } from "typeorm";

export class ConfigConnection {

    private static connection: Connection

    constructor() {}

    static async getNewConnection(): Promise<Connection> {
        if(!this.connection) {

            this.connection = await createConnection({
                //@ts-ignore
                type: process.env.TYPEORM_CONNECTION,
                host: process.env.TYPEORM_HOST,
                port: process.env.TYPEORM_PORT,
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                database: process.env.TYPEORM_DATABASE,
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