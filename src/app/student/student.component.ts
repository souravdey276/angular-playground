import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:Student[]=[];

  constructor(private service:StudentService) { 
    const studentObservable = service.getStudents();
    studentObservable.subscribe(
      (data: Student[])=>{
        this.students=data;
      }
    );
  }

  ngOnInit(): void {
  }

}
