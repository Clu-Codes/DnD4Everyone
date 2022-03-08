import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        id: ID
        email: String
        username: String
    }

    type Query {
        showUserById(id: ID!): User
        allUsers: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        destroyUser(id: ID!): User
    }
`;

export default typeDefs; 