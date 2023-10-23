import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './game.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {

  constructor(
    private readonly quizService: QuizService,
    private readonly gameService: GameService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {

    if (!route.firstChild) {
      this.loadQuestion();
    }
  }

  isNextButtonActive() {
    return this.quizService.numberOfQuestions > this.gameService.currentQuestionNumber;
  }

  gotoNextQuestion() {
    this.gameService.currentQuestionNumber++;
    this.loadQuestion();
  }

  loadQuestion() {
    this.router.navigate([this.gameService.currentQuestionNumber], {
      relativeTo: this.route,
    });
  }
}
