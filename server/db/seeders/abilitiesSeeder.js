import { Ability } from '../../models/index.js';

const abilityData = [
    {
        description: 'Strength',
        short_description: 'STR',
    },
    {
        description: 'Dexterity',
        short_description: 'DEX',
    },
    {
        description: 'Constitution',
        short_description: 'CON',
    },
    {
        description: 'Intelligence',
        short_description: 'INT',
    },
    {
        description: 'Wisdom',
        short_description: 'WIS',
    },
    {
        description: 'Charisma',
        short_description: 'CHA',
    },
];

const seedAbilities = () => Ability.bulkCreate(abilityData);

export default seedAbilities;