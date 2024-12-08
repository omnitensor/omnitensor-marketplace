
// Model.ts - Defines the schema and database interactions for AI models in the marketplace

import { DataTypes, Model, Sequelize } from 'sequelize';

// Define the interface for Model attributes
interface IModelAttributes {
    id: number;
    name: string;
    description: string;
    version: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Define the interface for the Model instance
export interface IModelInstance extends Model<IModelAttributes>, IModelAttributes {}

// Function to initialize the Model schema
export const defineModel = (sequelize: Sequelize) => {
    const ModelSchema = sequelize.define<IModelInstance>(
        'Model',
        {
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            version: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "1.0.0",
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.NOW,
            },
        },
        {
            tableName: 'models',
            timestamps: true,
        }
    );

    return ModelSchema;
};
