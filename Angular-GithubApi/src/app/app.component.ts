import { Component } from '@angular/core';
import { GithubService } from './services/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-GithubApi';

  users: String[];

  constructor(private githubService: GithubService) { }

  getUsers() {
    console.log("click")

    this.githubService.getData().subscribe((data) => {
      console.log(data)
    })
  }
}
