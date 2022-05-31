import { Request, Response } from "express";
import { Usuario, UsuarioI } from "../models/Usuario";


export class usuarioController {

    public async getAllUsuario(req: Request, res: Response){
        try {
            const user: UsuarioI[] = await Usuario.findAll(
                {
                    where: { activo: true }
                }
            ) // select * from usuarios;
            res.status(200).json({user})
        } catch (error) {
            
        }
    }

    public async getOneUsuario(req: Request, res: Response){
        const { id: idParam } = req.params
        
         try {
            const user:UsuarioI | null = await Usuario.findOne(
                {
                    where: { 
                        id: idParam,
                        activo: true
                    }
                }
            )
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }

    public async createUsuario(req: Request, res: Response){
        const{
            id,
            nombre,
            correo,
            telefono,
            direccion,
            activo      
        } = req.body
        try {
            let body:any = {
                nombre,
                correo,
                telefono,
                direccion,
                activo
                
            }

            const user = await Usuario.create({...body});
            res.status(200).json({user});
        } catch (error) {
            
        }
    }

    public async updateUsuario(req: Request, res: Response){
        const { id:pk } = req.params;
        const {
            id,
            nombre,
            correo,
            telefono,
            direccion,
            activo
         }= req.body

        try {
            let body:UsuarioI = {
                id,
                nombre,
                correo,
                telefono,
                direccion,
                activo
            }
            const userExist: UsuarioI | null = await Usuario.findByPk(pk)
            //const userExist: UsuarioI | null = await Usuario.findOne(
            //    {
            //        where: { id:pk }
            //    }
            //);

            if(!userExist) return res.status(500).json({msg:"El usuario no existe"})
            await Usuario.update(
                body,{
                    where: { id:pk }
                }
            );// select update from usuario where id=pk

        } catch (error) {
             
        }

        const user: UsuarioI | null = await Usuario.findByPk(pk)
        if(user) return res.status(200).json({user})
    }

    public async deleteUsuario(req: Request, res: Response){
        const  id = req.params.id;
        try {
            const userExist: UsuarioI | null = await Usuario.findByPk(id)
            if(!userExist) return res.status(400).json({msg:"El usuario no existe"})
            await Usuario.update(
                {
                    activo : false
                },
                {
                    where: { id }
                }
            );

            return res.status(200).json({msg:"Usuario eliminado"})
        } catch (error) {
           
        }
        const user: UsuarioI | null = await Usuario.findByPk(id);
        if(user) return res.status(200).json({user})
    }
}
