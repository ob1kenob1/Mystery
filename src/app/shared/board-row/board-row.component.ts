import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.less']
})
export class BoardRowComponent implements OnInit {
  @Input() public cards: any = {
    'cel1': {
      'img': 'assets/bob.gif'
    },
    "cel2": {},
    "cel3": {},
    "cel4": {},
    "cel5": {}
  };

  constructor() { }

  ngOnInit() {
    console.log(this.cards.cel1)
  }
  

}
