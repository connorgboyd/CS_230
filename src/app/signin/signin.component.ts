import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { AuthService } from '../signup/auth.service';
import { AuthResponse } from '../signup/authResponse';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private databaseService: DatabaseService, private authService: AuthService) { 
    this.databaseService.showData();
    
  }

  ngOnInit(): void {
  }
  public onSubmit(postForm: NgForm){
    
     this.authService.login(postForm.value.email, postForm.value.password).subscribe((data:AuthResponse) => {
       console.log(data);
        window.alert("User has been succesfully loggen in");
     },
     error => {
       console.log(error.error.error);
     }
   )
   postForm.resetForm();

  }
}


