import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpForm } from '../signup/signup.model';
import { CompleteResponse, UserInfo } from '../top-bar/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }
  public getCardsInfo(){
    return this.http.get<any>('https://metanin-7ac63-default-rtdb.firebaseio.com/cards.json');
  }
  
  
  
  public getUserInfo() {
    
    return this.http.get<CompleteResponse>('https://metanin-7ac63-default-rtdb.firebaseio.com/.json');
    
}
 public saveUserInfo(postForm: SignUpForm){
   return this.http.post<CompleteResponse>('https://metanin-7ac63-default-rtdb.firebaseio.com/users.json', postForm);

 }
  

}

