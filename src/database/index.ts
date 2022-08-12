import { Pool } from 'pg';
import config from '../config';

const database = new Pool({
  host: config.PGHOST,
  port: parseInt(config.PGPORT as string, 10),
  user: config.PGUSER,
  password: config.PGPASSWORD,
  database: config.PGDATABASE,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
});

database.on('error', (error: Error) => {
  console.log(error.message);
});

export default database;
