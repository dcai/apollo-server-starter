module.exports = {
  scripts: {
    default: 'NODE_ENV=production node server/index.js',
    dev: 'NODE_ENV=development nodemon server/index.js',
    lint: 'eslint ./server --cache --fix',
    format: 'prettier --write server/*',
    knex: 'knex',
    migrate: {
      up: {
        dev: 'NODE_ENV=development knex migrate:up',
        prod: 'NODE_ENV=production knex migrate:up',
      },
      down: {
        dev: 'NODE_ENV=development knex migrate:down',
        prod: 'NODE_ENV=production knex migrate:down',
      },
    },
    seed: {
      dev: 'NODE_ENV=development knex seed:run',
      prod: 'NODE_ENV=production knex seed:run',
    },
    test: {
      jest: 'jest',
      watch: 'jest --watch',
      coverage: 'jest --coverage',
      default: 'nps test.jest',
    },
  },
};
