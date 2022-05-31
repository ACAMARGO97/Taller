import { Component, OnInit } from '@angular/core';
import { VentaI } from 'src/app/models/venta';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-list-venta',
  templateUrl: './list-venta.component.html',
  styleUrls: ['./list-venta.component.css']
})
export class ListVentaComponent implements OnInit {
  public ventas: VentaI[] = []
  public displayedColumns: string[] = ["id","fechaVenta","valorTotal","tipoPago","usuarioId","Acciones"]
  constructor(
    private ventaservice: VentaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarVentas()
    
  }
  mostrarVentas() {
    this.ventaservice.getAllVenta()
      .subscribe({
        next: (data) => {
          this.ventas = data.venta
          console.log(this.ventas)
        }
      })
  }
}
