import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { FirebaseService } from "../services/firebase.service";
import { CompleteResponse, UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: "metanin-user-info",
    templateUrl: "user-info.component.html"

})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    constructor(private firebase: FirebaseService){

    }
    ngOnInit(): void {
        console.log("Sending a get request to the server")
        this.getUserInfo();
        


    }
    getUserInfo() {
        this.firebase.getUserInfo().subscribe((data: CompleteResponse) => {
            console.log(data);
            this.myInfo = data["my-info"];
    
    
        })
    }
}