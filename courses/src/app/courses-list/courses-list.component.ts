import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses;

  loadCourses() {
    this.courses = [
      { id: 123, name: 'Math'},
      { id: 456, name: 'English'},
      { id: 789, name: 'Science'},
    ];
  }
  
  onAdd(){
    this.courses.push({ id: 101, name: 'History'});
  }

  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course) {
    course.name = "UPDATED";
  }

  trackCourse(index, course) {
    course ? course.id : undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
