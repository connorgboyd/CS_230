import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { CardData } from './modelClasses/CardData';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  public cardInfo: CardData[];

  constructor(private firebaseservice: FirebaseService) { 
     this.cardInfo = []

  }

  ngOnInit(): void {
    this.firebaseservice.getCardsInfo().subscribe((cardsList:any) => {
      console.log(cardsList)
      this.cardInfo = cardsList;
    });
  }

}
