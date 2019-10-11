import { Card } from './../../../interfaces/card';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaclStorageService {

  constructor() { }

  public setCardsToLocalStorage(name: string, key: Card[]) {
    localStorage.setItem(name, JSON.stringify(key));
  }

  public getCardsFromLocalStorage(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  public clearLocalStorage() {
    localStorage.clear();
  }
}
