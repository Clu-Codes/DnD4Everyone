import { createApplication } from 'graphql-modules';
import { userModule } from './userModule.js';

export const application = createApplication({
    modules: [userModule]
});