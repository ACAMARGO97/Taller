//import { Model, DataTypes } from 'sequelize';
//import { database } from '../database/db';
//
//export class Candidato extends Model {
//    public nombre!: string;
//    public partido!: string;
//    public numtargeton!: string;
//}
//
//export interface CandidatoI {
//    nombre: string;
//    partido: string;
//    numtargeton: string;
//}
//
//Candidato.init(
//    {
//        nombre: { 
//        type: DataTypes.STRING,
//        allowNull: false
//        },
//
//        partido: { 
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//
//
//        numtargeton: { 
//            type: DataTypes.STRING,
//            allowNull: false
//        },
//    },
//    {
//        tableName: 'candidato',
//        sequelize: database,
//        timestamps: true
//
//    }
//)