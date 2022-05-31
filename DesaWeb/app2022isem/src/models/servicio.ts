//import sequelize from "sequelize";
//import { Model, DataTypes } from "sequelize";
//import { database } from "../database/db";
//import { Cliente } from "./cliente";
//
//
//export class Servicio extends Model {
//    public ClienteId!: number;
//    public id!: number;
//    public fecha!: Date;
//    public descripcion!: string;
//    public valor!: number;
//}
//
//export interface ServicioI {
//    ClienteId: number;
//    id: number;
//    fecha: Date;
//    descripcion: string;
//    valor: number;
//}
//
//Servicio.init(
//    {
//        id: {
//            type: DataTypes.BIGINT,
//            autoIncrement: true,
//            primaryKey: true
//        },
//        fecha: {
//            type: DataTypes.DATE,
//            allowNull: false
//        },
//        descripcion: {
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//        valor: {
//            type: DataTypes.BIGINT,
//            allowNull: false
//        },
//
//    },
//    {
//        tableName: 'Servicios',
//        sequelize: database,
//        timestamps: true
//    }
//);
//
//Cliente.hasMany(Servicio);
//Servicio.belongsTo(Cliente);
//
//
//
//
//