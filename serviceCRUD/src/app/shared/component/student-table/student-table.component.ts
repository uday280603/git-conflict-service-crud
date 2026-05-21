import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/Istudent';
import { StudentService } from '../../services/studentService.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  getAllStudents !: Istudent[];

  constructor(private _studentservice : StudentService) { }

  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent(){
    this._studentservice.fetchAllStudent()
    .subscribe({
      next: data =>{
        this.getAllStudents = data;
      },
      error: err=>{
        console.log(err);
      }
    })

  }

  onEdit(editObj: Istudent){
      console.log(editObj)
      this._studentservice.editTodoSub$.next(editObj)

  }

}
