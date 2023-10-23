import { Component } from '@angular/core';
import { GameService } from './modules/quiz/services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly gameService: GameService) {
    gameService.retrieveDataFromLocalStorage();
  }
}
