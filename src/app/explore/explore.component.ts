import { Component, OnInit } from '@angular/core';
import { CardData } from './modelClasses/CardData';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  public cardInfo: CardData[];

  constructor() { 
    
    const card1 = new CardData("Willy Wonka", "Fire/Med", 5, 6, 7, 8, 9, "bone sword", "22/09/2021 12:00PM", "23/09/2021 12:00AM");
    const card2 = new CardData("Eusebio", "Fire/Water", 12, 26, 37, 48, 59, "blue fan", "24/09/2021 2:00PM", "25/09/2021 2:00AM");
    const card3 = new CardData("Florencio", "Eart/Med", 25, 36, 47, 58, 69, "twin blades",  "25/09/2021 3:00PM", "26/09/2021 4:00AM");
    this.cardInfo = [card1, card2, card3]


  }

  ngOnInit(): void {
  }

}
