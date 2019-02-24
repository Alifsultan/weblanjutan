import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = '3 Author';
  getTitle(){
    return this.title;
  }

  // Courses = {
  //   {id: 0, name: 'author1'},
  //   {id: 1, name: 'author2'},
  //   {id: 2, name: 'author3'},
    
  // }

  constructor() { }

  ngOnInit() {
  }

}
