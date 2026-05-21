import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/Istudent';
import { StudentService } from '../../services/studentService.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfiormationComponent } from '../get-confiormation/get-confiormation.component';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {

  getAllStudents !: Istudent[];

  constructor(private _studentservice : StudentService ,private _matDialogBox : MatDialog  , private _snackBar : SnackBarService
    
  ) { }

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

  onRemoveStudent(removeId : number){
    let config = new MatDialogConfig()
    config.width = '400px'
    config.disableClose = true;
    config.data = `Are you Sure to delete this student with id ${removeId}...?`
    let matDialogRef = this._matDialogBox.open(GetConfiormationComponent ,config);
    matDialogRef.afterClosed().subscribe(getconfiramation =>{
      if(getconfiramation===true){
        this._studentservice.onRemove(removeId)
        .subscribe({
          next: res =>{
            this._snackBar.openSnackBar(res.msg)
            
          },
          error : err =>{
            this._snackBar.openSnackBar(err)
          }
        })
      }
    })



  }

}