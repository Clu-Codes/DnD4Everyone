const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID
        email: String
        username: String
    }

    type Query {
        user(id: ID!): User
        allUsers: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;