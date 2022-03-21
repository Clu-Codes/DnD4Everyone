import { DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';

const Character = sequelize.define(
    'Character',
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
        },
        //Maybe make these two separate columns: Lawful, Neutral, Chaotic & Good, Neutral, Evil
        alignments: {
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
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
)

export default Character;