import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompleteResponse, UserInfo } from '../top-bar/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }
  public getUserInfo() {
    return this.http.get<CompleteResponse>('https://metanin-7ac63-default-rtdb.firebaseio.com/.json');
}
}
