const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type User {
      id: ID!
      first_name: String
      last_name: String
      position: String
    }
    type Query {
      Users: [User]
      User(id: ID!): User
    }
    type Mutation {
      addUser(first_name: String!, last_name: String!, position: String!): User,
      updateUser(id: ID!, first_name: String, last_name: String, position: String): User,
      deleteUser(id: ID!): User,
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
