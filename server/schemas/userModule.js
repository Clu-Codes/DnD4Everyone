import { createModule, gql } from 'graphql-modules';
import { __dirname } from '../utils/index.js';
import { User } from '../models/index.js';
import { Character } from '../models/index.js';

export const userModule = createModule({
    id: 'user-module',
    dirname: __dirname,
    typeDefs: [
        gql`
            type User {
                id: ID
                email: String
                username: String
                characters: [Character]
            }
        
            type Query {
                showUserById(id: ID!): User
                allUsers: [User]
            }
        
            type Mutation {
                addUser(username: String!, email: String!, password: String!): User
                destroyUser(id: ID!): User
            }
        `
    ],
    resolvers: {
        Query: {
            allUsers: () => User.findAll({include: Character}),
            showUserById: async (parent, { id }) => {
                const user = await User.findByPk(id, {include: Character});
                
                return user;
            },
        },
        Mutation: {
            addUser: async (parent, args) => {
                const user = await User.create(args);
    
                return user;
            },
            destroyUser: async (parent, { id }) => {
                return User.destroy({
                    where: {
                        id
                    }
                });
            }
        },
    },
});