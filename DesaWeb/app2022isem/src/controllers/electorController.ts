//import { Request,Response } from "express";
//import { Elector, ElectorI } from "../models/elector";
//
//export class electorController{
//    public async getAllElector(req: Request, res: Response){
//        try {
//            const elector: ElectorI[] = await Elector.findAll() // select * from usuarios;
//            res.status(200).json({elector})
//        } catch (error) {
//            
//        }
//    }
//
//}