const uuidv4 = require('uuid/v4');
const { GraphQLNonNull, GraphQLObjectType } = require('graphql');

const _ = require('lodash');

const {
        UserType,
        UserCreateType,
        UserUpdateType,
        UserDeleteType
} = require('./types.js');

const Users = require('../../data/users.js');

const UserMutationType = new GraphQLObjectType({
        name: 'UserMutationType',
        description: 'Mutations for UserType',
        fields: {
                createUser: {
                        type: UserType,
                        args: {
                                input: {
                                        type: new GraphQLNonNull(UserCreateType)
                                }
                        },
                        resolve: (
                                source,
                                { input: { first_name, last_name, position } }
                        ) => {
                                const user = {};
                                user.id = uuidv4();
                                user.first_name = first_name;
                                user.last_name = last_name;
                                user.position = position;
                                Users.push(user);
                                return user;
                        }
                },
                updateUser: {
                        type: UserType,
                        args: {
                                input: {
                                        type: new GraphQLNonNull(UserUpdateType)
                                }
                        },
                        resolve: (
                                source,
                                {
                                        input: {
                                                id,
                                                first_name,
                                                last_name,
                                                position
                                        }
                                }
                        ) => {
                                const user = {};
                                user.id = id;
                                user.first_name = first_name;
                                user.last_name = last_name;
                                user.position = position;
                                const findId = Users.findIndex(o => o.id == id);
                                findId !== -1
                                        ? Users.splice(findId, 1, user)
                                        : Users.push(user);

                                return user;
                        }
                },
                deleteUser: {
                        type: UserType,
                        args: {
                                input: {
                                        type: new GraphQLNonNull(UserDeleteType)
                                }
                        },
                        resolve: (source, { input }) => {
                                _.remove(Users, user => user.id == input.id);
                                return input;
                        }
                }
        }
});

module.exports = UserMutationType;
