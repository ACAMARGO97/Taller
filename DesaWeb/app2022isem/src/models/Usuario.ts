import { Model, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class Usuario extends Model {
    public id!: number;
    public nombre!: string;
    public correo!: string;
    public direccion!: string;
    public telefono!: string;
    public activo!: boolean;
}

export interface UsuarioI {
    id: number;
    nombre: string;
    correo: string;
    direccion: string;
    telefono: string;
    activo: boolean;
}

Usuario.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
    },
    {
        tableName: 'usuario',
        sequelize: database,
        timestamps: true

    }
)