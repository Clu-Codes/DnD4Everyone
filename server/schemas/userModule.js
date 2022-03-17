import path from 'path';
import { fileURLToPath } from 'url';
import { createModule, gql } from 'graphql-modules';
import { User } from '../models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const userModule = createModule({
    id: 'user-module',
    dirname: __dirname,
    typeDefs: [
        gql`
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
        `
    ],
    resolvers: {
        Query: {
            allUsers: () => User.findAll(),
            showUserById: async (parent, { id }) => {
                const user = await User.findByPk(id);
                
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