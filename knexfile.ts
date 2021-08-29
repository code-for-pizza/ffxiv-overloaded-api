// Update with your config settings.

export default {
  development: {
    client: 'postgresql',
    connection: {
      database: 'overloaded',
      user: 'warrior',
      password: 'light',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      extension: 'ts',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      extension: 'ts',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 30,
    },
    migrations: {
      extension: 'ts',
    },
  },
};
