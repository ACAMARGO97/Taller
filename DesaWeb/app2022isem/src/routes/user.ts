import { Request, Response, Application, Router } from "express";
import { usuarioController } from "../controllers/usuario.controller";

export class usuarioRoutes {
    public usuarioController: usuarioController = new usuarioController();

    public routes(app: Application): void{
        app.route("/usuarios").get(this.usuarioController.getAllUsuario)
        app.route("/usuario/:id").get(this.usuarioController.getOneUsuario)
        app.route("/usuario").post(this.usuarioController.createUsuario)
        app.route("/usuario/:id").patch(this.usuarioController.updateUsuario)
        //app.route("/usuario/:id").delete(this.usuarioController.deleteUsuario)
        app.route("/delusuario/:id").patch(this.usuarioController.deleteUsuario)
    }
}