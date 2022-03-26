import { createModule, gql } from 'graphql-modules';
import { __dirname } from '../utils/index.js';
import { Character } from '../models/index.js';

export const characterModule = createModule({
    id: 'character-module',
    dirname: __dirname,
    typeDefs: [
        gql`
            enum ALIGNMENT {
                lawfulGood
                lawfulNeutral
                lawfulEvil
                neutralGood
                trueNeutral
                neutralEvil
                chaoticGood
                chaoticNeutral
                chaoticEvil
            }

            type Character {
                id: ID
                name: String
                level: Int
                alignment: ALIGNMENT
                experience_points: Int
                armor_class: Int
            }
        
            type Query {
                showCharacterById(id: ID!): Character
                allCharacters: [Character]
            }
        
            type Mutation {
                addCharacter(name: String!, level: Int!, alignment: ALIGNMENT!, experience_points: Int!, armor_class: Int!): Character
                updateCharacter(id: ID!, name: String, alignment: ALIGNMENT, level: Int, experience_points: Int, armor_class: Int): Character
                destroyCharacter(id: ID!): Character
            }
        `
    ],
    resolvers: {
        Query: {
            allCharacters: () => Character.findAll(),
            showCharacterById: async (parent, { id }) => {
                const character = await Character.findByPk(id);
                
                return character;
            },
        },
        Mutation: {
            addCharacter: async (parent, args) => {
                const character = await Character.create(args);
    
                return character;
            },
            updateCharacter: async (parent, args) => {
                const character = await Character.update(args, {
                    where: {
                        id: args.id
                    }
                });

                return character;
            },
            destroyCharacter: async (parent, { id }) => {
                return Character.destroy({
                    where: {
                        id
                    }
                });
            }
        },
    },
});