import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confiormation',
  templateUrl: './get-confiormation.component.html',
  styleUrls: ['./get-confiormation.component.scss']
})
export class GetConfiormationComponent implements OnInit {

  getMsg !: string;

  constructor( @Inject(MAT_DIALOG_DATA) msg : string ,
  private _matDialogRef : MatDialogRef<GetConfiormationComponent> ) { 
    this.getMsg = msg;
  }

  ngOnInit(): void {


  }

  onClose(flag : boolean){
    this._matDialogRef.close(flag)
  }

}