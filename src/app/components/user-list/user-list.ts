import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements OnInit {

  usuarios = signal<any[]>([]);

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios.set(data);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }

}
