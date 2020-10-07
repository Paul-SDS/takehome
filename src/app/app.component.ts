import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  commits_object:any;
  commits_aux_array = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCommits();
  } 

  getCommits(){
    this.http.get('https://api.github.com/repos/paulfajardo/takehome/commits').subscribe(data => {
      this.commits_object = data;  

      this.commits_object.forEach(element => {
        this.commits_aux_array.push(element);
      });

      console.log(data);
    },error => {
        console.log('error', error);
    });

  }
}
