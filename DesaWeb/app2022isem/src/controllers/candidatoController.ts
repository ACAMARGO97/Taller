//import { Request, Response } from "express";
//import { Candidato, CandidatoI } from "../models/candidato";
//
//
//export class candidatoController {
//
//    public async getAllCandidato(req: Request, res: Response){
//        try {
//            const candi: CandidatoI[] = await Candidato.findAll() // select * from usuarios;
//            res.status(200).json({candi})
//        } catch (error) {
//            
//        }
//    }
//
//    public async getOneCandidato(req: Request, res: Response){
//        const { id: idParam } = req.params
//         try {
//            const candi:CandidatoI | null = await Candidato.findOne(
//                {
//                    where: { 
//                        id: idParam,
//                    }
//                }
//            )
//            res.status(200).json(candi)
//        } catch (error) {
//            res.status(500).json({msg: "Error Internal"})
//        }
//    }
//
//    public async createCandidato(req: Request, res:Response){
//        const{
//            id,
//            nombre,
//            partido,
//            numtargeton,
//        } = req.body;
//        try {
//            let body:CandidatoI = {
//                nombre,
//                partido,
//                numtargeton
//            }
//            const candi:CandidatoI = await Candidato.create({...body});
//            res.status(200).json({candi});
//        } catch (error) {
//            
//        }
//    }
//
//    public async updateCandidato(req: Request, res: Response){
//        const { id:pk } = req.params;
//        const {
//            id,
//            nombre,
//            partido,
//            numtargeton,
//         }= req.body
//
//        try {
//            let body:CandidatoI = {
//                nombre,
//                partido,
//                numtargeton
//            }
//            const userExist: CandidatoI | null = await Candidato.findByPk(pk)
//            //const userExist: UsuarioI | null = await Usuario.findOne(
//            //    {
//            //        where: { id:pk }
//            //    }
//            //);
//
//            if(!userExist) return res.status(500).json({msg:"El Candidato no existe"})
//            await Candidato.update(
//                body,{
//                    where: { id:pk }
//                }
//            );// select update from usuario where id=pk
//
//        } catch (error) {
//             
//        }
//
//        const candi: CandidatoI | null = await Candidato.findByPk(pk)
//        if(candi) return res.status(200).json({candi})
//    }
//
//    public async deleteCandidato(req: Request, res: Response){
//        const { id:pk } = req.params;
//        /*
//        try {
//            const userExist: UsuarioI | null = await Usuario.findByPk(pk)
//            if(!userExist) return res.status(500).json({msg:"El usuario no existe"})
//            await Usuario.destroy(
//                {
//                    where: {id: pk}
//                }
//            )
//            res.status(200).json({msg:"Usuario eliminado"})
//        } catch (error) {
//            
//        }
//        */
//        try {
//            const userExist: CandidatoI | null = await Candidato.findByPk(pk)
//            if(!userExist) return res.status(500).json({msg:"El Candidato no existe"})
//            await Candidato.update(
//                {
//                    activo : false,
//                },
//                {
//                    where: { id:pk }
//                }
//            );
//
//            return res.status(200).json({msg:"Candidato eliminado"})
//        } catch (error) {
//           
//        }
//    }
//}
//