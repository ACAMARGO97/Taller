//import { Request, Response, Application, Router } from "express";
//import { votacionController } from "../controllers/votacionController";
//
//export class VotacionRoutes {
//    public votacionController: votacionController = new votacionController();
//
//    public routes(app: Application): void {
//        app.route("/votaciones").get(this.votacionController.getAllVotacion);
//        app.route("/votacion").post(this.votacionController.createVotacion);
//        app.route("/votacion/:id").patch(this.votacionController.updateVotacion);
//        app.route("/delete/votacion/:id").patch(this.votacionController.deleteVotacion);
//    }
//}