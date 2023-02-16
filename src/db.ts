import { Client } from "pg";

export interface PgClientConfigType {
  database: string;
  host: string;
  user?: string;
}

export const getPgClient = (): Client => {
  let pgClientConfig: PgClientConfigType = {
    database: process.env.PGDATABASE as string,
    host: process.env.PGHOST as string,
    user: process.env.PGUSER as string,
  };
  return new Client(pgClientConfig);
};
