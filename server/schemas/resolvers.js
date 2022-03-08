const { User } = require('../models');

const resolvers = {
    Query: {
        allUsers: async () => {
            return User.findAll();
        },
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
};

module.exports = resolvers;