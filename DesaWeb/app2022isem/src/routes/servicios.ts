//import { Request, Response, Application, Router } from "express";
//import { ServicioController } from "../controllers/servicios.controller";
//
//export class ServicioRoutes {
//    public servicioController: ServicioController = new ServicioController();
//
//    public routes(app: Application): void {
//        app.route("/servicios").get(this.servicioController.getAllServicio);
//        app.route("/servicio").post(this.servicioController.createServicio);
//        app.route("/servicio/:id").patch(this.servicioController.updateServicio);
//        app.route("/servicio/:id").delete(this.servicioController.deleteServicio);
//    }
//}