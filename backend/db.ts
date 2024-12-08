import { Sequelize, DataTypes, Model } from 'sequelize';
import path from 'path';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../config/database.db'),
    logging: false
});

class ModelEntity extends Model {}

ModelEntity.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Model',
    tableName: 'models',
    timestamps: true
});

export const db = {
    connect: async () => {
        try {
            await sequelize.authenticate();
            console.log('Database connected successfully.');
        } catch (error) {
            console.error('Database connection failed:', error);
        }
    },
    getAllModels: async () => {
        return await ModelEntity.findAll();
    }
};

(async () => {
    await sequelize.sync({ alter: true });
})();