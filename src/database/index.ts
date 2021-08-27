import createConnection from 'knex';

const knex = createConnection({
  client: 'postgres',
  connection: {
    host: process.env.POSTGRES_HOST || 'localhost',
    user: process.env.POSTGRES_USER || 'warrior',
    password: process.env.POSTGRES_PASSWORD || 'light',
    database: process.env.POSTGRES_DB || 'overloaded',
  },
});

export default knex;
