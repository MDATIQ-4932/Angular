import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  standalone: false,
  templateUrl: './add-student.html',
  styleUrl: './add-student.css'
})
export class AddStudent implements OnInit {

formGroup!:formGroup;

constructor(private studentservice:StudentService){
 

private formBuilder:FormBuilder;
private router:Router;

onInit():void{
this.formGroup=this.formBuilder.group({

name :[''],
email :[''],
fee :['']

})


}

}


}
