import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.less']
})
export class BoardRowComponent implements OnInit {
  @Input() cards: {} = {
    "cel1": "1",
    "cel2": "2",
    "cel3": "3",
    "cel4": "4",
    "cel5": "5"
  };

  constructor() { }

  ngOnInit() {

  }


}
