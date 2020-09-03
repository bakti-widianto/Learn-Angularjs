import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  configUrl = 'http://localhost:3000/api/data/';

  constructor(private http: HttpClient) {

  }

  getConfig() {
    let data = this.http.get(this.configUrl);
    console.log(data)
  }

  ngOnInit(): void {
  }

}
