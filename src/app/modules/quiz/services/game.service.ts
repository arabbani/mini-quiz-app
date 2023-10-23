import { Injectable } from '@angular/core';
import { QuizQuestion, QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _currentQuestionNumber: number = 1;
  private _currectAnswerCount = 0;
  private _currentQuestion: QuizQuestion | undefined;
  selectedOptionForCurrentQuestion = '';

  constructor(private readonly quizService: QuizService) {}

  get currentQuestionNumber() {
    return this._currentQuestionNumber;
  }

  get score() {
    return this._currectAnswerCount;
  }

  set currentQuestion(question: QuizQuestion) {
    this._currentQuestion = question;
  }

  get currentQuestionIsNotTheLastQuestion() {
    return this.quizService.numberOfQuestions > this._currentQuestionNumber;
  }

  loadQuestion(questionNumber: number) {
    if (!this._currentQuestion) {
      this._currentQuestion = this.quizService.getQuestion(questionNumber - 1);
    }
    return this._currentQuestion;
  }

  resetAnswer() {
    this._currentQuestion = undefined;
    this.selectedOptionForCurrentQuestion = '';
  }

  selectNextQuestion() {
    if (this.currentQuestionIsNotTheLastQuestion) {
      this._currentQuestionNumber++;
    }
  }

  verifyUserResponse(selectedOption: string) {
    this.selectedOptionForCurrentQuestion = selectedOption;

    if (selectedOption === this._currentQuestion?.answer) {
      this._currectAnswerCount++;
    }
  }
}
