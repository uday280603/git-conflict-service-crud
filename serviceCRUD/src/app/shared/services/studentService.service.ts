import { Injectable } from '@angular/core';
import { IresStudent, Istudent } from '../models/Istudent';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  studentArr: Istudent[] = [
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

  constructor() { }

  fetchAllStudent(): Observable<Istudent[]> {
    return of(this.studentArr)

  }
  createStudent (student: Istudent) : Observable<IresStudent<Istudent>>{
    this.studentArr.push(student)
  return of ({
    msg : `The student is id ${student.stdId} is added successfully`,
    data : student
  })



}}

  //remove
  onRemove(removeId: number): Observable<IresStudent> {

    let GETiNDEX = this.studentArr.findIndex(s => s.stdId === removeId);
    let arr = this.studentArr.splice(GETiNDEX, 1);

    return of({
      msg: `student with id ${removeId} removed successfully..!`,
      data: arr[0]
    })

  }
}
