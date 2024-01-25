import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
// import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   implements OnInit{
  title = 'contact-us-form';

  selectedGender: string = 'male';
  displaymessage='true'
departments:any[]=[];
userForm: FormGroup;
  constructor(private router: Router, private http: HttpClient  ) {
    this.userForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      Termaccepted: new FormControl(true), // Added for terms and conditions checkbox
      choosedepartment: new FormControl(''),
      selectgender :new FormControl(''),
    });
  }
  onsaveuser() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      // Process the form data
      alert('submit successfully');
    } else {
      // Display a single error message indicating invalid form data
      alert('Please check your form for errors and try again.');
    }
  }

ngOnInit(): void {
  this.loaddepartments();
}
loaddepartments(){
  this.http.get('assets/departments.json').subscribe((res:any)=>{
    console.log('Departments fetched successfully:', this.departments);
    debugger;
  
  });
 
}

}
