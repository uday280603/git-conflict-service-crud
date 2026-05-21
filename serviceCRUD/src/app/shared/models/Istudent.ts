export interface Istudent {
  stdId: number;
  fname: string;
  lname: string;
  email: string;
  contact: number;
  course: string;
  isActive: boolean;
}


export interface IresStudent{
    msg : string;
    data : Istudent
}