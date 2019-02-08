const { GraphQLList, GraphQLObjectType } = require('graphql');

const { UserType } = require('./types.js');
const Users = require('../../data/users.js');

const UserQueryType = new GraphQLObjectType({
    name: 'UserQueryType',
    description: 'Query Schema for UserType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve: () => Users
        }
    }
});

module.exports = UserQueryType;