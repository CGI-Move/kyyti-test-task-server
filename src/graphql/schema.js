const { GraphQLSchema } = require('graphql');

const UserQueryType = require('./queries.js');
const UserMutationType = require('./mutations');

const UserSchema = new GraphQLSchema({
        query: UserQueryType,
        mutation: UserMutationType
});

module.exports = UserSchema;
