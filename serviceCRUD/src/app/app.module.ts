import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { GetConfiormationComponent } from './shared/component/get-confiormation/get-confiormation.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentTableComponent,
    StudentFormComponent,
    GetConfiormationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }