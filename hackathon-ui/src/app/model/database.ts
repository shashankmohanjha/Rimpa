import { Table } from "./table";

export class Database {
    username: string;
    password: string;
    serverName: string;
    dbName: string;
    tableName: string;
    columns: string[];
    tables: Array<Table>;
}


