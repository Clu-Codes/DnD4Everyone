import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

const Character = sequelize.define(
    'characters',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }, 
        alignment: {
            type: DataTypes.ENUM,
            values: ['lawfulGood', 'lawfulNeutral', 'lawfulEvil', 'neutralGood', 'trueNeutral', 'neutralEvil', 'chaoticGood', 'chaoticNeutral', 'chaoticEvil'],
            allowNull: false
        },
        experience_points: {
            type: DataTypes.INTEGER,
        },
        armor_class: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'characters',
    }
)

export default Character;