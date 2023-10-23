import { Injectable } from '@angular/core';
import { QuizQuestion, QuizService } from './quiz.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

type GameData = {
  currentQuestionNumber: number,
  currectAnswerCount: number,
  currentQuestion: QuizQuestion | undefined,
  selectedOptionForCurrentQuestion: string
};

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private _gameData: GameData = {
    currentQuestionNumber: 1,
    currectAnswerCount: 0,
    currentQuestion: undefined,
    selectedOptionForCurrentQuestion: ''
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

  resetGameData(data: GameData = {
    currentQuestionNumber: 1,
    currectAnswerCount: 0,
    currentQuestion: undefined,
    selectedOptionForCurrentQuestion: ''
  }) {
    this._gameData = data;
  }

  loadQuestion(questionNumber: number) {
    if (!this._gameData.currentQuestion) {
      this._gameData.currentQuestion = this.quizService.getQuestion(questionNumber - 1);
    }
    return this._gameData.currentQuestion;
  }

  resetAnswer() {
    const data = {
      ...this._gameData,
      currentQuestion: undefined,
      selectedOptionForCurrentQuestion: ''
    };

    this.resetGameData(data);
  }

  selectNextQuestion() {
    if (this.currentQuestionIsNotTheLastQuestion) {
      this._gameData.currentQuestionNumber++
    }
  }

  verifyUserResponse(selectedOption: string) {
    this._gameData.selectedOptionForCurrentQuestion = selectedOption;

    if (selectedOption === this._gameData.currentQuestion?.answer) {
      this._gameData.currectAnswerCount++;
    }
  }
}
