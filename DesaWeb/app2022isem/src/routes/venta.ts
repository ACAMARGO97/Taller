import { Request, Response, Application, Router } from "express";
import { ventaController } from "../controllers/ventaController";

export class ventaRoutes {
    public ventaController: ventaController = new ventaController();

    public routes(app: Application): void{
        app.route("/ventas").get(this.ventaController.getAllVenta)
        app.route("/ventas").post(this.ventaController.createVentas)
    }
}