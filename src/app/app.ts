import { Component } from '@angular/core';
import { UserList } from './components/user-list/user-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {

}