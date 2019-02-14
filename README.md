# kyyti-test-task-server
This is NodeJs(Express) GraphQL server for Kyyti test assignment.

## Set up
- Clone / Download the project
- npm install
- node server.js
- go to http://localhost:8080/graphiql to test GraphQL Querries and Mutation
 
## GraphQL User fields:
 - id: ID!
 - first_name: String!
 - last_name: String!
 - position: String!
 
## GraphQL Querries
- Users -> Give the list of all users
- User (id: ID!) -> Give the user with the same id

## GraphQL Mutations
- addUser(first_name: String! last_name: String! position: String!) -> Add user
- updateUser(id: ID! first_name: String last_name: String position: String) -> Edit user's data (first_name, last_name and position can be empty, in that case they won't be changed )
- deleteUser(id: ID!) -> Deletes user with the same id
