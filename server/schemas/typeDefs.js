const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        email: String
        username: String
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;