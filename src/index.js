require('dotenv/config')
import { GraphQLServer } from 'graphql-yoga'

import { sequelize } from './datalayer/connections/mysql'
import { typeDefs } from './graphql/types'
import { resolvers } from './graphql/resolvers'

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

// const options = {
//   port: process.env.PORT,
//   endpoint: '/graphql',
//   cors: {
//     credentials: true,
//     origin: ["http://localhost:3000"]
//   }
// }


sequelize.sync({ force: false })
  .then(() => {
    console.log('Create Models')

    server.start({ port: process.env.PORT }, ({ port }) => {
      console.log('Server on port', port)
    })
  })
  .catch(error => {
    console.log('Failed models created', error)
  })


