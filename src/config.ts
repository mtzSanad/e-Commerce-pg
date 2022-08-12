import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  PGUSER,
  PGHOST,
  PGPASSWORD,
  PGDATABASE,
  PGPORT,
  PGDATABASE_TST,
  ENV,
} = process.env;

const config = {
  PORT,
  PGUSER,
  PGHOST,
  PGPASSWORD,
  PGDATABASE: ENV === 'DEV' ? PGDATABASE : PGDATABASE_TST,
  PGPORT,
};

export default config;
