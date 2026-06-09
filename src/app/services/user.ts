import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  obtenerUsuarios() {
    return this.http.get<User[]>(this.url);
  }

}
