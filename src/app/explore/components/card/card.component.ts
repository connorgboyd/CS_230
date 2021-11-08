import { Component, Input, OnInit } from '@angular/core';
import { CardData } from '../../modelClasses/CardData';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public card: CardData = new CardData("default name", "default mastery", 0, 0, 0, 0, 0, "default weapon", "00/00/00 0000", "00/00/00 0000");
  @Input()
  public cardColor: string ="blue";
  @Input()
  public cardFont: string = "white";
  

  constructor() { }

  ngOnInit(): void {
  }

}
