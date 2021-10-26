import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { SignUpForm } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private firebaseservice: FirebaseService) { 
    
  }

  ngOnInit(): void {
  }
  public onSignUpUser(postForm: SignUpForm){
    console.log(postForm);
    this.firebaseservice.saveUserInfo(postForm).subscribe(() => {
    console.log("User has been succesfully signed up")

  })
}

}
