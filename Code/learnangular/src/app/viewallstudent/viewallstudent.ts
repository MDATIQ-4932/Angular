import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student.model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-viewallstudent',
  standalone: false,
  templateUrl: './viewallstudent.html',
  styleUrl: './viewallstudent.css'
})
export class Viewallstudent implements OnInit {
  students: any;

  constructor(private Studentservice: StudentService) { }
  
  loadAllStudent() {
    this.students = this.Studentservice.getAllStudent();
  }
  ngOnInit(): void {
    this.loadAllStudent();
  }

}
