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
  public player1Deck: Card[];
  public player2Deck: Card[];
  public emtyCard: Card = {
    url: 'assets/emty.jpg',
  };

  constructor(
    public localStorageService: LoaclStorageService,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.player1Deck = this.localStorageService.getCardsFromLocalStorage('player1Deck')
      ? this.localStorageService.getCardsFromLocalStorage('player1Deck')
      : player1CardsMock;
    this.player2Deck = this.localStorageService.getCardsFromLocalStorage('player2Deck')
      ? this.localStorageService.getCardsFromLocalStorage('player2Deck')
      : player2CardsMock;
  }

  ngOnChanges() {
    // TODO: set and get cards values from local Storage;
    this.player2Deck = this.localStorageService.getCardsFromLocalStorage('player2Deck')
      ? this.localStorageService.getCardsFromLocalStorage('player2Deck')
      : player2CardsMock;
      console.log(this.localStorageService.getCardsFromLocalStorage('player2Deck'));
  }

  public startFight(): void {
    this.fightAct(this.player1Deck, this.player2Deck);
    this.updatePlayer2Deck();
    // this.personalCards.forEach((card: Card) => {
    //   console.log(card);
    // });
    // this.localStorageService.setCardsToLocalStorage()
  }

  public restart(): void {
    this.localStorageService.clearLocalStorage();
    this.player1Deck = player1CardsMock;
    this.player2Deck = player2CardsMock;
  }

  public fightAct(player1Deck: Card[], player2Deck: Card[]) {
    // const personalaCardsAfterFight: Card[] = []; TODO
    const player2CardsAfterFight = [];
    for (let i = 0; i < 5; i++) {
      if (player1Deck[i].attack) {
        if (player2Deck[i] && player2Deck[i].health) {
          const newHealth = player2Deck[i].health - player1Deck[i].attack;
          if (newHealth <= 0) {
            player2CardsAfterFight.push(this.emtyCard);
          } else {
            player2Deck[i].health = newHealth;
            player2CardsAfterFight.push(player2Deck[i]);
          }
        } else {
          console.log(`Enemy hergo got ${player1Deck[i].attack} damage`);
        }
      }
      this.localStorageService.setCardsToLocalStorage('player2Deck', player2CardsAfterFight);
    }
  }

  public updatePlayer2Deck(): void {
    this.player2Deck = this.localStorageService.getCardsFromLocalStorage('player2Deck');
  }

}
