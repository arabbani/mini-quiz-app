import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  _currentQuestionNumber: number = 1;

  constructor() { }

  get currentQuestionNumber() {
    return this._currentQuestionNumber;
  }

  set currentQuestionNumber(questionNumber: number) {
    this._currentQuestionNumber = questionNumber;
  }
}
