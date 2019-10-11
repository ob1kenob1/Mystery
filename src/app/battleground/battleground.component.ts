import { Card } from 'src/app/interfaces/card';
import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import player1CardsMock from 'src/assets/mock/player1CardsMock.json';
import player2CardsMock from 'src/assets/mock/player2CardsMock.json';
import { LoaclStorageService } from 'src/app/shared/services/local-storage-service/loacl-storage.service';

@Component({
  selector: 'app-battleground',
  templateUrl: './battleground.component.html',
  styleUrls: ['./battleground.component.less']
})
export class BattlegroundComponent implements OnInit, OnChanges {
  public player1Board: Card[];
  public player2Board: Card[];
  // TODO: move players health to separate component with all players info; 
  public player1Health: number = 50;
  public player2Health: number = 50;
  public emptyCard: Card = {
    url: 'assets/empty.jpg',
    health: 0
  };

  constructor(
    public localStorageService: LoaclStorageService,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    console.log(player1CardsMock);
    console.log(this.player1Board);
    
  }

  ngOnChanges(): void {
    // TODO

    
  }

  public setDefaultBattleground(): void {
    // doesn`t work after fight begin...
    this.player1Board = [];
    this.player2Board = [];
    this.player1Board = [ ...player1CardsMock ];
    this.player2Board = [ ...player2CardsMock ];
    this.cd.markForCheck;
  }


  public restart(): void {
    this.setDefaultBattleground();
  }

  public startFight(): void {
  }

  public player1Attack(): void {
    for (let i = 0; i < 5; i++) {
      this.setEmptyCard(this.player2Board, i)
      if (this.player2Board[i] === this.emptyCard && this.player1Board[i] !== this.emptyCard) {
        this.player2Health = this.player2Health - this.player1Board[i].attack;
      }
      this.player2Board[i].health = this.player2Board[i].health - this.player1Board[i].attack;
      if (this.player2Board[i].health <= 0) {
        this.player2Board[i] = this.emptyCard;
      }
    }
    console.log(this.player2Board);
    console.log(player2CardsMock);
  }

  // TODO the same as player 1 attack
  // public player2Attack(): void {
  //   for (let i = 0; i < 5)
  // }

  private setEmptyCard(board: Card[], index: number): void {
    if (board[index].health <= 0) {
      board[index] = this.emptyCard;
    }
  }

 
}
