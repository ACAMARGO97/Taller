import { Request, Response } from "express";
import { Marcas, MarcasI } from "../models/marca";


export class marcaController {

    public async getAllUsuario(req: Request, res: Response){
        try {
            const user: MarcasI[] = await Marcas.findAll() // select * from usuarios;
            res.status(200).json({user})
        } catch (error) {
            
        }
    }
}