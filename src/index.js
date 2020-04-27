require('dotenv/config')
require('./datalayer/connections/mysql')
import { GraphQLServer } from 'graphql-yoga'

import { typeDefs } from './graphql/types'
import { resolvers } from './graphql/resolvers'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start({ port: process.env.PORT }, ({ port }) => {
  console.log('Server on port', port)
})