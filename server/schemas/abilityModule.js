import { createModule, gql } from 'graphql-modules';
import { __dirname } from '../utils/index.js';
import { Ability } from '../models/index.js';

export const abilityModule = createModule({
    id: 'ability-module',
    dirname: __dirname,
    typeDefs: [
        gql`
            type Ability {
                id: ID
                description: String
                short_description: String
            }
        
            type Query {
                allAbilities: [Ability]
                showAbilityById(id: ID!): Ability
            }
        `
    ],
    resolvers: {
        Query: {
            allAbilities: () => Ability.findAll(),
            showAbilityById: async (parent, { id }) => {
                const user = await Ability.findByPk(id);
                
                return user;
            },
        },
    },
});