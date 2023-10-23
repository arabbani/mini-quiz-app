import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
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
    return !!this.gameService.selectedOption;
  }


  loadQuestion() {
    this.router.navigate([this.gameService.currentQuestionNumber], {
      relativeTo: this.route,
    });
  }

  submitAnswer() {
    this.gameService.verifyUserResponse();

    if (this.isCurrentQuestionIsTheLastQuestion()) {
      this.submitQuiz();
    } else {
      this.gotoNextQuestion();
    }
  }

  private gotoNextQuestion() {
    this.gameService.selectNextQuestion();
    this.loadQuestion();
  }

  private submitQuiz() {
    this.router.navigate(['result'], {
      relativeTo: this.route,
    });
  }
}
