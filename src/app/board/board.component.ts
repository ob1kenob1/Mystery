import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {
  public player1Board: {} = {
    "cel1": "test1",
    "cel2": "test2",
    "cel3": "test3",
    "cel4": "test4",
    "cel5": "test5",
  };
  public player2Board: {} = {
    "cel1": "p2test1",
    "cel2": "p2test2",
    "cel3": "p2test3",
    "cel4": "p2test4",
    "cel5": "p2test5",
  };
  public player1Deck: {

  };
  public player2Deck: {

  };
  public player1: {} = {
    "playerName": "evil gremlin",
    "avatar": "../../assets/gremlin.jpg"
  };
  public player2: {} = {
    "playerName": "bernd"
  };
  constructor() { }

  ngOnInit() {


  }


}
