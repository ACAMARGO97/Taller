import { Request, Response } from "express";
import { Vehiculo, VehiculoI } from "../models/Vehiculo";

export class VehiculoController {

    public async getAllUsuario(req: Request, res: Response){
        try {
            const user: VehiculoI[] = await Vehiculo.findAll() // select * from usuarios;
            res.status(200).json({user})
        } catch (error) {
            
        }
    }
}