require('dotenv').config();

const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { loadSchemaSync } = require('@graphql-tools/load');
const { addResolversToSchema } = require('@graphql-tools/schema');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { mergeResolvers } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');
const knex = require('knex');
const knexConfig = require('../knexfile');

const PORT = process.env.PORT || 4000;

async function startApolloServer() {
  const schema = loadSchemaSync(path.join(__dirname, './graphql/**/schema.graphql'), {
    loaders: [new GraphQLFileLoader()],
  });

  const resolversArray = loadFilesSync(
    path.join(__dirname, './graphql/**/resolver.js'),
  );
  const resolvers = mergeResolvers(resolversArray);

  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
  });
  const server = new ApolloServer({
    schema: schemaWithResolvers,
    context: () => {
      const env = process.env.NODE_ENV || 'development';
      const db = knex(knexConfig[env]);
      return {
        db,
      };
    },
  });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  return { server, app };
}

startApolloServer().then();
