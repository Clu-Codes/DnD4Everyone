import { createModule, gql } from 'graphql-modules';
import { __dirname } from '../utils/index.js';
import { User } from '../models/index.js';

export const userModule = createModule({
    // look into GraphQL ENUMS for alignments
    // enum Alignment {

    // }

    id: 'character-module',
    dirname: __dirname,
    typeDefs: [
        gql`
            type Character {
                id: ID
                name: String
                level: Int
                alignments: Enum
                experience_points: Int
                armor_class: Int
            }
        
            type Query {
                showCharacterById(id: ID!): Character
                allCharacters: [Characters]
            }
        
            type Mutation {
                addCharacter(name: String!, level: int!, alignments: !): User
                destroyCharacter(id: ID!): Character
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