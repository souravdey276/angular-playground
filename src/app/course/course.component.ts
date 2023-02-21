import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
 title:string = "List of Courses";
 name:string = "Angular"
 duration:number = 8;
 courses:string[];
//  courses = [
//    'HTML-CSS',
//    'JAVASCRIPT',
//    'TypeScript',
//    'Angular',
//    'React'
//  ]
// Logic for calling HTTP Service
  constructor(service: CourseService) { // Dependency Injection
    //let service = new CourseService();
    this.courses = service.getCourse();
    }

  ngOnInit(): void {
  }

}
