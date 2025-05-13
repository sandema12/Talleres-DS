import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  imports: [CommonModule]
})
export class CourseComponent implements OnInit {

  courses: Array<Course> = [];
  constructor() { }

  getCourseList() {
    return dataCourses
  }

  ngOnInit() {
    this.courses = this.getCourseList();
  }

}
