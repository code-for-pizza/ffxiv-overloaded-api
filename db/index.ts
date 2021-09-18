import createConnection, { Knex } from 'knex';
import config from '../knexfile';

/**
 * Returns the proper config based on the current environment
 */
const getConfig = (): Knex.Config => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return config.production;
    case 'staging':
      return config.staging;
    default:
      return config.development;
  }
};

/**
 * Creates connection to the Knex Postgres DB
 */
function createKnexConnection(): Knex {
  return createConnection(getConfig());
}

function setupDatabase() {
  let knex;

  try {
    if (!knex) knex = createKnexConnection();

    return knex;
  } catch (error) {
    if (!knex) {
      console.error(`Failed to connect to the database: ${error}`);
    }
  }

  throw new Error('Unable to connect to the database.');
}

export default setupDatabase();
