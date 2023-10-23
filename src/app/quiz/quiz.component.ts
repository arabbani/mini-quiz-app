import { Component } from '@angular/core';
import { QuizService } from './quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  numberOfQuestions: number;
  currentQuestionNumber: number;

  constructor(
    private readonly quizService: QuizService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.numberOfQuestions = quizService.numberOfQuestions;
    this.currentQuestionNumber = quizService.currentQuestionNumber;

    if (!route.firstChild) {
      this.loadQuestion();
    }
  }

  gotoPreviousQuestion() {
    this.quizService.currentQuestionNumber = --this.currentQuestionNumber;
    this.loadQuestion();
  }

  gotoNextQuestion() {
    this.quizService.currentQuestionNumber = ++this.currentQuestionNumber;
    this.loadQuestion();
  }

  loadQuestion() {
    this.router.navigate([this.currentQuestionNumber], {
      relativeTo: this.route,
    });
  }
}
