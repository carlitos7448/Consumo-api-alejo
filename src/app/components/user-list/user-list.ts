import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  usuarios: any[] = [];

  constructor(private userService: UserService){

  }

  ngOnInit(){

    this.userService.obtenerUsuarios().subscribe((data: any) => {

      this.usuarios = data;

    });

  }

}