import { createApplication } from 'graphql-modules';
import { abilityModule } from './abilityModule.js';
import { userModule } from './userModule.js';

export const application = createApplication({
    modules: [
        abilityModule,
        userModule,
    ]
});