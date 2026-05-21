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
  @ViewChild('stdForm') stdForm !: NgForm 
  isInEditMode : boolean = false
  constructor(
    private _todoService : StudentService
  ) { }

  ngOnInit(

  ): void {

    this.onEdit()
  }

  onEdit(){
    this._todoService.editTodoSub$.subscribe({
      next : data => {
        this.editTodo = data
        this.stdForm.form.patchValue(data)
        this.isInEditMode = true
      }
    })
  }

  onUpdate(){
    if(this.stdForm.valid){
      let updatedStd : Istudent = {
        ...this.stdForm.value,
        stdId : this.editTodo.stdId
      }
      console.log(updatedStd);
      this._todoService.updatedStd(updatedStd)
      .subscribe({
        next : res => {
          console.log(res);
          this.stdForm.reset()
          this.isInEditMode = false
        },
        error : err => {
          console.log(err);        
        }
      })
    }
  }

}
