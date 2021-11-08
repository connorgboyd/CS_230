import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { FirebaseService } from '../services/firebase.service';
import { AuthService } from './auth.service';
import { AuthResponse } from './authResponse';
import { SignUpForm } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  


  constructor(private databaseService: DatabaseService, private authService: AuthService) { 
    this.databaseService.showData();
    
  }

  ngOnInit(): void {
  }
  public onSubmit(postForm: NgForm){
    
     this.authService.signup(postForm.value.email, postForm.value.password).subscribe((data:AuthResponse) => {
       console.log(data);
        window.alert("User has been succesfully signed up");
     },
     error => {
       console.log(error.error.error);
     }
   )
   postForm.resetForm();

  }
}


