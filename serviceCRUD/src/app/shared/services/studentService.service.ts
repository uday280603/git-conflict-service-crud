import { Injectable } from '@angular/core';
import { IresStudent, Istudent } from '../models/Istudent';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentArr : Istudent[] = [
    {
      stdId: 101,
      fname: 'Rahul',
      lname: 'Sharma',
      email: 'rahul.sharma@example.com',
      contact: 9876543210,
      course: 'Computer Science',
      isActive: true,
    },
    {
      stdId: 102,
      fname: 'Priya',
      lname: 'Patil',
      email: 'priya.patil@example.com',
      contact: 9123456780,
      course: 'Information Technology',
      isActive: false,
    },
  ];
   editTodoSub$ : Subject<Istudent> = new Subject<Istudent>()

  constructor() {}

  fetchAllStudent() : Observable <Istudent[]>{
    return of(this.studentArr)
  }

  updatedStd(updatedStd: Istudent): Observable<IresStudent>{
    let getIndex = this.studentArr.findIndex( s => s.stdId === updatedStd.stdId)
    this.studentArr[getIndex] = updatedStd
    return of({
      msg : `The student with id ${updatedStd.stdId} is updated successfully !!!`,
      data : updatedStd
    })
  }



}
