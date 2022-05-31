import { Request,Response } from "express";
import { Usuario, UsuarioI } from "../models/Usuario";
import { Venta, VentaI } from "../models/Venta";
import sequelize from "sequelize"; 
const { Op } = require('sequelize')

export class ventaController{
    public async getAllVenta(req: Request, res: Response){
        try {
            const venta: VentaI[] = await Venta.findAll(
                {
                    attributes: ["id","fechaVenta","valorTotal","tipoPago"],
                    include:{
                        model:Usuario,
                        attributes: ['nombre']

                    }
                }
            ) // select * from usuarios;
            res.status(200).json({venta})
        } catch (error) {
            
        }
    }

    public async createVentas(req: Request, res: Response){
        const{
            fechaVenta, valorTotal, 
            tipoPago, usuarioId   
        } = req.body
        try {
            let body:VentaI = {
                fechaVenta, valorTotal,
                tipoPago, usuarioId
            }
            const venta:Venta = await Venta.create({...body});
            res.status(200).json({venta});
        } catch (error) {
            
        }
    }
}
