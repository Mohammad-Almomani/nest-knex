import type { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'node_project',
      user: 'moh',
      password: '123@Mmm@',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'node_project',
      user: 'moh',
      password: '123@Mmm@',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'node_project',
      user: 'moh',
      password: '123@Mmm@',
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

module.exports = config;
