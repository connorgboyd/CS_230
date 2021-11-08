import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from "rxjs";
import { CardData } from "./explore/modelClasses/CardData";
import { SignUpForm } from "./signup/signup.model";
import { UserInfo } from "./top-bar/user-info.model";

@Injectable({
    providedIn: 'root'
})


export class DatabaseService{
    items: Observable<SignUpForm []>;
    constructor(private db:AngularFireDatabase){
        console.log("Setting up Firebase communication");
        this.items = this.db.list<SignUpForm>('users').valueChanges();

    }
    public showData(){
        this.items.subscribe((data: SignUpForm []) => {
            console.log("Data received");
            for (let item of data){
            console.log(item);
        }
    })
}

}