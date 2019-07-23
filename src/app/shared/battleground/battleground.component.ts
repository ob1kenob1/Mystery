import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card';
import sampleData from 'src/assets/mock/cardsMock.json';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.less']
})
export class BattlegroundComponent implements OnInit {
  public cards: Card[] = sampleData;

  // TODO: use board row component to display cards on battleground

  constructor() { }

  ngOnInit() {
    console.log(this.cards)
  }

}
