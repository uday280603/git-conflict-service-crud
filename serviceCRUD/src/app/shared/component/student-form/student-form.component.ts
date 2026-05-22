import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from '../../models/Istudent';
import { StudentService } from '../../services/studentService.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  @ViewChild("studForm") studForm !: NgForm
  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
  }
  onStudentSubmit(){
    if (this.studForm.valid){
      let stdObj : Istudent= {
...this.studForm.value, stdId: Date.now() 
      }
      this.studentService.createStudent(stdObj)
    }
  }

}
