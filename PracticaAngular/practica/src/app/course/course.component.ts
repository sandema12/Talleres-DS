import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  imports: [CommonModule]
})
export class CourseComponent implements OnInit {

  constructor(private courseService: CourseService) { }
  courses: Array<Course> | undefined;

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  ngOnInit() {
    this.getCourses();
  }
}