import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {

  usuarios: User[] = [];
  cargando = false;
  error = '';
  terminoBusqueda = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.error = '';

    this.userService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los usuarios. Intenta de nuevo.';
        this.cargando = false;
      }
    });
  }

  get usuariosFiltrados(): User[] {
    if (!this.terminoBusqueda.trim()) {
      return this.usuarios;
    }

    const termino = this.terminoBusqueda.toLowerCase();
    return this.usuarios.filter((usuario) =>
      usuario.name.toLowerCase().includes(termino)
    );
  }

}
