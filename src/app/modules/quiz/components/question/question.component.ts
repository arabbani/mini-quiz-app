import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { QuizQuestion } from '../../services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  question: QuizQuestion | undefined;
  answer = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly gameService: GameService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const questionNumber = Number(params.get('questionNumber'));
      this.gameService.resetAnswer();
      this.question = this.gameService.loadQuestion(questionNumber);
    });
  }

  handleOptionCLick(event: any) {
    this.answer = event.target.value;
    this.gameService.verifyUserResponse(this.answer);
  }
}
