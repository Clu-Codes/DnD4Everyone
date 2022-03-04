const { User } = require('../models/');

const resolvers = {
    Query: {
        user: async(parent, args, context) => {
            if (context.user) {
                const user = await User.findByPk(context.user._id);
                
                return user;
            }

            return null;
        },
    },
    // Mutation: {
    //     addUser: async(parent, args) => {
    //         const user = await User.create(args);

    //         return user;
    //     },
    // },
};

module.exports = resolvers;