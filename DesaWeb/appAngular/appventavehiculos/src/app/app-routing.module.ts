import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { ListVehiculoComponent } from './components/vehiculo/list-vehiculo/list-vehiculo.component';
import { CreateVentasComponent } from './components/venta/create-ventas/create-ventas.component';
import { ListVentaComponent } from './components/venta/list-venta/list-venta.component';
import { ListVentas1Component } from './components/venta/list-ventas1/list-ventas1.component';

const routes: Routes = [
  {
    path: "usuario",
    component: ListUsuarioComponent
  },
  {
    path: "vehiculo",
    component: ListVehiculoComponent
  },
  {
    path: "ventas",
    component: ListVentaComponent
  },
  {
    path: "ventaCreate",
    component: CreateVentasComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
