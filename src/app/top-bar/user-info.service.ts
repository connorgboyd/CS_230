import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CompleteResponse } from "./user-info.model";

@Injectable()
export class UserInfoService {
    [x: string]: any;
     constructor(private http:HttpClient){

     }
      getUserInfo() {
        this.firebase.getUserInfo().subscribe((data: CompleteResponse) => {
            console.log(data);
            this.myInfo = data["my-info"];
        })
}


}