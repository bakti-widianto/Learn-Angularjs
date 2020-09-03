import { Component, OnInit } from '@angular/core';
import { User } from './models/user'
import { UserService } from './services/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[];
  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};
  editUserForm: boolean;
  editedUser: any = {};


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.getUsers();
    // console.log(this.users)
  }

  getUsers(): User[] {
    return this.userService.getUsersFromData();
  }

  showAddForm() {
    if (this.users.length) {
      this.newUser = {};
      this.editUserForm = false;
    }
    this.userForm = true;
    this.isNewUser = true;
  }

  saveUser(user: User) {
    if (this.isNewUser) {
      this.userService.addUser(user)
    }
    this.userForm = false;
  }

  cancelAdd() {
    this.userForm = false
  }

  removeUser(user: User) {
    if (confirm('Are You Sure Delete User?')) {
      this.userService.deleteUser(user)
    }
  }

  showEditForm(user: User) {
    if (!user) {
      this.userForm = false
      return;
    }
    this.userForm = false
    this.editUserForm = true
    // console.log(user)
    this.editedUser = user
  }

  cancelEdit() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

}
