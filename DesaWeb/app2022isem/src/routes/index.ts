import { usuarioRoutes } from "./user";
import { ventaRoutes } from "./venta";
//import { VotacionRoutes } from "./votacion";
//import { candidatoRoutes } from "./candidato";
//import { ServicioRoutes } from "./servicios";


export class Routes{
    //public CandidatoRoutes: candidatoRoutes = new candidatoRoutes();
    //public servicioRoutes: ServicioRoutes = new ServicioRoutes();
    //public VotacionRoutes: VotacionRoutes = new VotacionRoutes();
    public usuarioRoutes: usuarioRoutes = new usuarioRoutes();
    public ventaRoutes: ventaRoutes = new ventaRoutes();
}