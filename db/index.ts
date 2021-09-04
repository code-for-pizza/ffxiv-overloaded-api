import createConnection, { Knex } from 'knex';
import config from '~/knexfile';

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
      console.log('Using development configs...', '\n');
      return config.development;
  }
};

/**
 * Creates connection to the Knex Postgres DB
 */
function createKnexConnection(): Knex {
  console.log('Attempting to connect to the database...', '\n');
  return createConnection(getConfig());
}

function setupDatabase() {
  let knex;
  let retries = 5;

  while (retries) {
    try {
      if (!knex) knex = createKnexConnection();

      console.log(
        `Successfully connected to the ${knex.client} database.`,
        '\n'
      );

      return knex;
    } catch (error) {
      if (!knex) {
        console.error(
          `Failed to connect to the database: ${error}`,
          '\n',
          `Retrying ${--retries} more times...`
        );
      }
    }
  }

  throw new Error('Unable to connect to the database.');
}

export default setupDatabase();
