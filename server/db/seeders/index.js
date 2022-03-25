import sequelize from '../../config/connection.js';
import seedAbilities from './abilitiesSeeder.js';

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n---------- DATABASE SYNCED ----------\n');

    await seedAbilities();
    console.log('\n---------- ABILITIES SEEDED ----------\n');

    process.exit(0);
};

seedAll();