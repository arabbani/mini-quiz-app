import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './game.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  constructor(
    private readonly gameService: GameService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    if (!route.firstChild) {
      this.loadQuestion();
    }
  }

  isCurrentQuestionIsTheLastQuestion() {
    return !this.gameService.currentQuestionIsNotTheLastQuestion;
  }

  isAnswerSubmitButtonActive() {
    return !!this.gameService.selectedOptionForCurrentQuestion;
  }

  gotoNextQuestion() {
    this.gameService.selectNextQuestion();
    this.loadQuestion();
  }

  loadQuestion() {
    this.router.navigate([this.gameService.currentQuestionNumber], {
      relativeTo: this.route,
    });
  }

  submitQuiz() {

  }
}
