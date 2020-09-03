import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id: 1,
      firstName: 'Bakti',
      lastName: 'Widianto'
    },
    {
      id: 2,
      firstName: 'Teh',
      lastName: 'Kotak'
    }
  ];

  constructor() { }

  getUsersFromData(): User[] {
    return this.upersons
  }

  addUser(user: User) {
    user.id = this.upersons.length + 1;
    this.upersons.push(user);
  }

  deleteUser(user: User) {
    // console.log(this.upersons.indexOf(user))
    this.upersons.splice(this.upersons.indexOf(user), 1);
  }

  updateUser(user: User) {
    const index = this.upersons.findIndex(u => user.id === u.id);
    console.log(index)
    // this.upersons[index] = user
  }

}
