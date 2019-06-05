import { Component, OnInit } from '@angular/core';

import { Card } from 'src/app/shared/interfaces/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})

export class BoardComponent implements OnInit {
  // TODO make get method for mock cards from assets
  public cardsMock: any = [
    {
      "url": "../../assets/Hommy.gif",
      "alt": "bot",
      "desription": "simple bot",
      "health": 25,
      "attack": 5,
      "cteature": true
    },
    {
      "url": "../../assets/Hommy.gif",
      "alt": "bot",
      "desription": "simple bot",
      "health": 26,
      "attack": 6,
      "cteature": true
    },
    {
      "url": "../../assets/Hommy.gif",
      "alt": "bot",
      "desription": "simple bot",
      "health": 27,
      "attack": 7,
      "cteature": true
    },
    {
      "url": "../../assets/Hommy.gif",
      "alt": "bot",
      "desription": "simple bot",
      "health": 28,
      "attack": 8,
      "cteature": true
    },
    {
      "url": "../../assets/Hommy.gif",
      "alt": "bot",
      "desription": "simple bot",
      "health": 29,
      "attack": 9,
      "cteature": true
    }
  ]

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
