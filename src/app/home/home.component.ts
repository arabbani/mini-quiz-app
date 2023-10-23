import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../modules/quiz/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly router: Router,
    private readonly gameService: GameService
  ) {}

  playQuiz() {
    this.gameService.resetGameData();
    this.router.navigate(['/quiz']);
  }
}
