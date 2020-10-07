import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'takehome';
  commits_array:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCommits();
  } 

  getCommits(){
    this.http.get('https://api.github.com/repos/paulfajardo/takehome/commits').subscribe(data => {
        this.commits_array = data;
        console.log(this.commits_array);
    },error => {
        console.log('error', error);
    });

  }
}
