import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  Courses;
  Hobby;
  iniTugas = 'INI Tugas Pertama Biodata';
  getiniTugas(){
    return this.iniTugas;
  }

  currentDate = Date.now();

  constructor(private c:CoursesService) { 
    this.Courses = c.getSource();
    this.Hobby = c.getHobby();

  }

  ngOnInit() {
  }

}
