import User from './User.js';
import Character from './Character.js';

User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
})

export {
    User,
    Character
};