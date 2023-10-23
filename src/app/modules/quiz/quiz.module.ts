import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from '@angular/forms';
import { GameComponent } from './components/game/game.component';
import { ResultComponent } from './components/result/result.component';


@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    GameComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule
  ]
})
export class QuizModule { }
