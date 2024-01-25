import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule, } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule ,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
