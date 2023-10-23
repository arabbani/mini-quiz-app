import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { QuizService } from '../../services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  readonly score;
  readonly totalScore;

  constructor(
    quizService: QuizService,
    private readonly gameService: GameService,
    private readonly router: Router
  ) {
    this.score = gameService.score;
    this.totalScore = quizService.numberOfQuestions;

    if (gameService.numberOfQuestionsAttempted < quizService.numberOfQuestions) {
      router.navigate(['/quiz']);
    }
  }

  startQuiz() {
    this.gameService.resetGameData();
    this.router.navigate(['/quiz']);
  }
}
