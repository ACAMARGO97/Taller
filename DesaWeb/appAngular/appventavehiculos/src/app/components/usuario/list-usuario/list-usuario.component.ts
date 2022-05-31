import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {
  public users: UsuarioI[] = []
  public displayedColumns: string[] = ["id","nombre","correo","direccion","telefono"]
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarUsuarios()
  }
  mostrarUsuarios() {
    this.usuarioService.getAllUser()
    .subscribe({
      next: (data) => {
        this.users = data.user
      }
    })
  }

}
