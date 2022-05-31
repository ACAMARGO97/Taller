//import { Request,Response } from "express";
//import { Votacion, VotacionI } from "../models/votacion";
//
//export class votacionController{
//    public async getAllVotacion(req:Request,res:Response) {
//        try {
//            const votacion: VotacionI[] = await Votacion.findAll({
//                where:{activo:true}
//            });
//            res.status(200).json({votacion});
//        } catch (error) {
//            
//        }
//    }
//
//    public async getOneVotacion(req:Request,res:Response) {
//        const {id: idParam}= req.params;
//        try {
//            const votacion: VotacionI | null = await Votacion.findOne(
//                {
//                    where: {id: idParam, activo: true}
//                }
//            );
//            res.status(200).json({votacion});
//        } catch (error) {
//            res.status(500).json({msg:"Error internal"});
//            
//        }
//    }
//
//    public async createVotacion(req:Request,res:Response) {
//        const {
//            id,
//            ElectorId,
//            CandidatoId,
//            activo
//        } = req.body;
//
//        try {
//            let body:VotacionI = {
//                id,
//                ElectorId,
//                CandidatoId,
//                activo
//            }
//            const votacion = await Votacion.create({...body});
//            res.status(200).json({votacion});
//        } catch (error){
//
//        }
//    }
//
//    public async updateVotacion(req:Request,res:Response) {
//        const {id:pk} = req.params;
//
//        const {
//            id,
//            ElectorId,
//            CandidatoId,
//            activo
//        } = req.body;
//
//        try {
//            let body:VotacionI = {
//                id,
//                ElectorId,
//                CandidatoId,
//                activo
//            }
//            const votacionExist: VotacionI | null = await Votacion.findByPk(pk);
//            if(!votacionExist) return res.status(400).json({mns:"Votacion no existe"});
//            await Votacion.update(body,{where: {id:pk}});
//        }catch (error){
//
//        }
//
//        const votacion: VotacionI | null = await Votacion.findByPk(pk);
//        if(votacion) return res.status(200).json({votacion});
//    }
//    
//    public async deleteVotacion(req:Request,res:Response) {
//        const {id: pk} = req.params;
//        const {id} = req.body;
//
//        try {
//
//            const votacionExist: VotacionI | null = await Votacion.findByPk(pk);
//            if(!votacionExist) return res.status(400).json({mns:"Votacion no existe"});
//            await Votacion.update({activo:false},{where: {id:pk}});
//
//            return res.status(200).json({msg:"Votacion Eliminado"})
//        }catch (error){
//
//        }
//
//        const votacion: VotacionI | null = await Votacion.findByPk(pk);
//        if(votacion) return res.status(200).json({votacion});
//    }
//}