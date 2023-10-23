import { Injectable } from '@angular/core';
import { QuizQuestion, QuizService } from './quiz.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

type GameData = {
  currentQuestionNumber: number,
  currectAnswerCount: number,
  currentQuestion: QuizQuestion | undefined,
  selectedOptionForCurrentQuestion: string,
  numberOfQuestionsAttempted: number
};

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private _gameData: GameData = {
    currentQuestionNumber: 1,
    currectAnswerCount: 0,
    currentQuestion: undefined,
    selectedOptionForCurrentQuestion: '',
    numberOfQuestionsAttempted: 0,
  };

  constructor(private readonly quizService: QuizService, private readonly localStorageService: LocalStorageService) {
  }

  get currentQuestionNumber() {
    return this._gameData.currentQuestionNumber;
  }

  get score() {
    return this._gameData.currectAnswerCount;
  }

  get currentQuestionIsNotTheLastQuestion() {
    return this.quizService.numberOfQuestions > this.currentQuestionNumber;
  }

  get selectedOption() {
    return this._gameData.selectedOptionForCurrentQuestion;
  }

  get numberOfQuestionsAttempted() {
    return this._gameData.numberOfQuestionsAttempted;
  }

  loadQuestion(questionNumber: number) {
    if (!this._gameData.currentQuestion) {
      this._gameData.currentQuestion = this.quizService.getQuestion(questionNumber - 1);
      this.saveDataToLocalStorage();
    }
    return this._gameData.currentQuestion;
  }

  selectNextQuestion() {
    if (this.currentQuestionIsNotTheLastQuestion) {
      this._gameData.currentQuestionNumber++
    }
  }

  setUserResponse(selectedOption: string) {
    this._gameData.selectedOptionForCurrentQuestion = selectedOption;
  }

  verifyUserResponse() {
    this._gameData.numberOfQuestionsAttempted++;

    if (this._gameData.selectedOptionForCurrentQuestion === this._gameData.currentQuestion?.answer) {
      this._gameData.currectAnswerCount++;
    }

    this.saveDataToLocalStorage();
  }

  resetAnswer() {
    const data = {
      ...this._gameData,
      currentQuestion: undefined,
      selectedOptionForCurrentQuestion: ''
    };
    this.resetGameData(data);
  }

  resetGameData(data: GameData = {
    currentQuestionNumber: 1,
    currectAnswerCount: 0,
    currentQuestion: undefined,
    selectedOptionForCurrentQuestion: '',
    numberOfQuestionsAttempted: 0,
  }) {
    this._gameData = data;
    this.saveDataToLocalStorage();
  }

  retrieveDataFromLocalStorage() {
    const savedData = this.localStorageService.get('game-data');
    this.resetGameData(savedData || {
      currentQuestionNumber: 1,
      currectAnswerCount: 0,
      currentQuestion: undefined,
      selectedOptionForCurrentQuestion: '',
      numberOfQuestionsAttempted: 0,
    });
  }

  private saveDataToLocalStorage() {
    this.localStorageService.set('game-data', this._gameData);
  }
}
