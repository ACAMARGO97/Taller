import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Marcas extends Model {
    public nombre!: string;
}

export interface MarcasI {
    nombre: string;
}

Marcas.init(
    {
        nombre: { 
        type: DataTypes.STRING,
        allowNull: false
        },
        
    },
    {
        tableName: 'marcas',
        sequelize: database,
        timestamps: true

    }
)
