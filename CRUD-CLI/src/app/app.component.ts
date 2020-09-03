import { Component, OnInit } from '@angular/core';
import { User } from './models/user'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users: User[]

  constructor(private userService: UserService){ }

  ngOnInit(){
    this.users = this.getUsers();
    console.log(this.users)
  }

  getUsers(): User[]{
    return this.userService.getUsersFromData();

  }

  showAddForm(){
    console.log('form add')
  }

}
