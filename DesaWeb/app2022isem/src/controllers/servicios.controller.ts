//import { Request,Response } from "express";
//import { Servicio, ServicioI } from "../models/servicio";
//
//export class ServicioController{
//    public async getAllServicio(req:Request,res:Response) {
//        try {
//            const servicio: ServicioI[] = await Servicio.findAll();
//            res.status(200).json({servicio});
//        } catch (error) {
//            
//        }
//    }
//
//    public async getOneServicio(req:Request,res:Response) {
//        const {id: idParam}= req.params;
//        try {
//            const servicio: ServicioI | null = await Servicio.findOne(
//                {
//                    where: {id: idParam}
//                }
//            );
//            res.status(200).json({servicio});
//        } catch (error) {
//            res.status(500).json({msg:"Error internal"});
//            
//        }
//    }
//
//    public async createServicio(req:Request,res:Response) {
//        const {
//            id,
//            fecha,
//            descripcion,
//            valor,
//            ClienteId
//        } = req.body;
//
//        try {
//            let body:ServicioI = {
//                
//                id,
//                fecha,
//                descripcion,
//                valor,
//                ClienteId
//                
//            }
//            const servicio = await Servicio.create({...body});
//            res.status(200).json({servicio});
//        } catch (error){
//
//        }
//    }
//
//    public async updateServicio(req:Request,res:Response) {
//        const {id:pk} = req.params;
//
//        const {
//            id,
//            fecha,
//            descripcion,
//            valor,
//            ClienteId
//        } = req.body;
//
//        try {
//
//            let body:ServicioI = {
//                id,
//                fecha,
//                descripcion,
//                valor,
//                ClienteId
//
//            }
//
//            const servicioExist: ServicioI | null = await Servicio.findByPk(pk);
//            if(!servicioExist) return res.status(400).json({mns:"Servicio no existe"});
//            await Servicio.update(body,{where: {id:pk}});
//        }catch (error){
//
//        }
//
//        const servicio: ServicioI | null = await Servicio.findByPk(pk);
//        if(servicio) return res.status(200).json({servicio});
//    }
//    
//    public async deleteServicio(req:Request,res:Response) {
//        const {id: pk} = req.params;
//
//        try {
//            const servicioExist: ServicioI | null = await Servicio.findByPk(pk);
//            if(!servicioExist) return res.status(400).json({mns:"Servicio no existe"});
//            await Servicio.destroy({
//                where: {id:pk}
//            })
//
//            res.status(200).json({msg:"Servicio eliminado"});
//        } catch (error) {
//            
//        }
//
//
//    }
//}