import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

import { Card } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {

  @Input()
  public card: Card;

  @Output()
  public cardClick: EventEmitter = new EventEmitter();

  constructor() { }

  public onCardClick(e) {
    console.log(this.cardClick.emit(e));
    this.cardClick.emit(e);
  }

}
