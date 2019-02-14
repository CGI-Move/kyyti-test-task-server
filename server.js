var express = require('express')
var { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
var bodyParser = require('body-parser')
var cors = require('cors');
const schema = require('./src/graphql/schema.js')

const PORT = 8080
const server = express()

server.use(
    '/graphql',
    cors(),
    bodyParser.json(),
    graphqlExpress({
        schema,
    })
)

server.use(
    '/graphiql',
    cors(),
    graphiqlExpress({
        endpointURL: '/graphql',
    })
)

server.listen(PORT)
console.log('🚀 Running GraphQL API server at localhost:4000/graphql')
