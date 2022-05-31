import { Request, Response } from "express";
import { TipoVehiculo, TipoVehiculoI } from "../models/tipovehiculo";

export class TipoVehiculoController {

    public async getAllUsuario(req: Request, res: Response){
        try {
            const user: TipoVehiculoI[] = await TipoVehiculo.findAll() // select * from usuarios;
            res.status(200).json({user})
        } catch (error) {
            
        }
    }
}