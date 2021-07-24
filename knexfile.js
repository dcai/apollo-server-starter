require('dotenv').config();

const baseConfig = {
  migrations: {
    tableName: 'knex_migrations',
    directory: __dirname + '/db/migrations',
  },
  seeds: {
    directory: __dirname + '/db/seeds',
  },
};
module.exports = {
  development: {
    client: 'sqlite3',
    connection: () => ({
      filename: process.env.SQLITE_FILENAME || './db.sqlite',
    }),
    useNullAsDefault: true,
    ...baseConfig,
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    ...baseConfig,
  },
};
