import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  enterValue = ''
  email = ''
  password = ''

  onLoginPost() {
    this.email = this.enterValue
  }


}
