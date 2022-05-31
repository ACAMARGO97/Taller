//import { Request, Response, Application, Router } from "express";
//import { candidatoController } from "../controllers/candidatoController";
//
//export class candidatoRoutes {
//    public CandidatoController: candidatoController = new candidatoController();
//
//    public routes(app: Application): void{
//        app.route("/candidatos").get(this.CandidatoController.getAllCandidato)
//        app.route("/candidato/:id").get(this.CandidatoController.getOneCandidato)
//        app.route("/candidato").post(this.CandidatoController.createCandidato)
//        app.route("/candidato/:id").patch(this.CandidatoController.updateCandidato)
//        //app.route("/usuario/:id").delete(this.usuarioController.deleteUsuario)
//        app.route("/delcandidato/:id").patch(this.CandidatoController.deleteCandidato)
//    }
//}