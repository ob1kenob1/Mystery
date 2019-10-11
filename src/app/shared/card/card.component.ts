import { Card } from 'src/app/interfaces/card';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  public card: Card;

  public emtyCard: Card = {
    url: 'assets/emty.jpg',
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    if (this.card.health < 1) {
      this.card = this.emtyCard;
    }
  }

}
