import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.less']
})
export class PlayerInfoComponent implements OnInit {
  @Input() player: any = {
    "playerName" : "test",
    "avatar": "../../assets/default.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

}
