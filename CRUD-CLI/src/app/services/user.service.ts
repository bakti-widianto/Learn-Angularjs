import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private upersons: User[] = [
    {
      id:1,
      firstName: 'Bakti',
      lastName: 'Widianto'
    },
    {
      id:2,
      firstName: 'Teh',
      lastName: 'Kotak'
    }
  ];

  constructor() { }

  getUsersFromData(): User[]{
    return this.upersons
  }

}
