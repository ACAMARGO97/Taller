//import { Model, DataTypes } from 'sequelize';
//import { database } from '../database/db';
//
//export class Elector extends Model {
//    public nombre!: string;
//    public mesa!: string;
//    public ciudad!: string;
//  
//}
//
//export interface ElectorI {
//    nombre: string;
//    mesa: string;
//    ciudad: string;
//
//}
//
//Elector.init(
//    {
//        nombre: {
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//        
//        mesa: {
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//
//        ciudad: {
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//        
//    },
//    {
//        tableName: "elector",
//        sequelize: database,
//        timestamps: true
//    }
//)
//