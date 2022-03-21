import { createApplication } from 'graphql-modules';
import { userModule } from './userModule.js';
import { characterModule } from './characterModule.js';

export const application = createApplication({
    modules: [userModule, characterModule]
});