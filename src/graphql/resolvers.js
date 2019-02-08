const _ = require('lodash')
const uuidv4 = require('uuid/v4')
const User = require('../data/users.js')

const resolvers = {
    Query: {
        Users: () => {
            return User
        },
        User: (root, { id }) => {
            return User.find(c => c.id == id)
        },
    },
    Mutation: {
        addUser: (root, { first_name, last_name, position }) => {
            const newUser = {
                id: uuidv4(),
                first_name,
                last_name,
                position,
            }
            User.push(newUser)
            return newUser
        },
        updateUser: (root, input) => {
            const findId = User.findIndex(c => c.id == input.id)
            if (findId !== -1) {
                if (input.first_name) User[findId].first_name = input.first_name
                if (input.last_name) User[findId].last_name = input.last_name
                if (input.position) User[findId].position = input.position
                return User[findId]
            }

            return 'Error, no user with such id'
        },
        deleteUser: (root, { id }) => {
            _.remove(User, o => o.id === id)
            return { id }
        },
    },
}

module.exports = resolvers
