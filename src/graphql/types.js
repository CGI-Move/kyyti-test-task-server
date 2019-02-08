const {
        GraphQLString,
        GraphQLNonNull,
        GraphQLObjectType,
        GraphQLInputObjectType
} = require('graphql');

const UserType = new GraphQLObjectType({
        name: 'UserType',
        description: 'User list',
        fields: {
                id: { type: GraphQLString },
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                position: { type: GraphQLString }
        }
});

const UserCreateType = new GraphQLInputObjectType({
        name: 'UserCreateType',
        description: 'Add a user to the list',
        type: UserType,
        fields: {
                first_name: { type: new GraphQLNonNull(GraphQLString) },
                last_name: { type: new GraphQLNonNull(GraphQLString) },
                position: { type: new GraphQLNonNull(GraphQLString) }
        }
});

const UserUpdateType = new GraphQLInputObjectType({
        name: 'UserUpdateType',
        description:
                'Update existing user with id (if id is not found, adding user with same id)',
        type: UserType,
        fields: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                first_name: { type: new GraphQLNonNull(GraphQLString) },
                last_name: { type: new GraphQLNonNull(GraphQLString) },
                position: { type: new GraphQLNonNull(GraphQLString) }
        }
});

const UserDeleteType = new GraphQLInputObjectType({
        name: 'UserDeleteType',
        description: 'Delete existing user with id',
        type: UserType,
        fields: {
                id: { type: new GraphQLNonNull(GraphQLString) }
        }
});

module.exports = { UserType, UserCreateType, UserUpdateType, UserDeleteType };
