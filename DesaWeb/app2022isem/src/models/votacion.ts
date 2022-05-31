//import { Model, DataTypes } from 'sequelize';
//import { database } from '../database/db';
//import { Candidato } from './candidato';
//import { Elector } from './elector';
//
//export class Votacion extends Model {
//    public id!: number;
//    public ElectorId!: number;
//    public CandidatoId!: number;
//    public activo!: boolean;
//}
//
//export interface VotacionI {
//    id: number;
//    ElectorId: number;
//    CandidatoId: number;
//    activo: boolean;
//}
//
//Votacion.init(
//    {
//        id: {
//            type: DataTypes.BIGINT,
//            autoIncrement: true,
//            primaryKey: true
//        },
//        activo: {
//            type: DataTypes.BOOLEAN,
//            defaultValue: true,
//            allowNull: false
//        },
//    },
//    {
//        tableName: "votacione",
//        sequelize: database,
//        timestamps: true
//    }
//)
//
//Elector.belongsToMany(Candidato, { through:  Votacion });
//Candidato.belongsToMany(Elector, { through: Votacion });