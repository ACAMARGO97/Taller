import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { ListUsuarioComponent } from './components/usuario/list-usuario/list-usuario.component';
import { ListMarcaComponent } from './components/marca/list-marca/list-marca.component';
import { CreateUsuarioComponent } from './components/usuario/create-usuario/create-usuario.component';
import { ListVehiculoComponent } from './components/vehiculo/list-vehiculo/list-vehiculo.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ListVentaComponent } from './components/venta/list-venta/list-venta.component';
import { ListVentas1Component } from './components/venta/list-ventas1/list-ventas1.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CreateVentasComponent } from './components/venta/create-ventas/create-ventas.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListUsuarioComponent,
    ListMarcaComponent,
    CreateUsuarioComponent,
    ListVehiculoComponent,
    ListVentaComponent,
    ListVentas1Component,
    CreateVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
