import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/studentService.service';
import { Istudent } from '../../models/Istudent';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  editTodo !: Istudent
  @ViewChild('studForm') studForm !: NgForm 
  isInEditMode : boolean = false
  constructor(
    private _todoService : StudentService,private studentService : StudentService
  ) { }

  ngOnInit(): void {

    this.onEdit()
  }
  


  onEdit(){
    this._todoService.editTodoSub$.subscribe({
      next : data => {
        this.editTodo = data
        this.studForm.form.patchValue(data)
        this.isInEditMode = true
      }
    })
  }

  onUpdate(){
    if(this.studForm.valid){
      let updatedStd : Istudent = {
        ...this.studForm.value,
        stdId : this.editTodo.stdId
      }
      console.log(updatedStd);
      this._todoService.updatedStd(updatedStd)
      .subscribe({
        next : res => {
          console.log(res);
          this.studForm.reset()
          this.isInEditMode = false
        },
        error : err => {
          console.log(err);        
        }
      })
    }
  }
  onStudentSubmit(){
    if (this.studForm.valid){
      let stdObj : Istudent= {
...this.studForm.value, stdId: Date.now() 
      }
      this.studentService.createStudent(stdObj)
      this.studForm.reset()
    }
  }

}