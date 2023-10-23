import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule
  ]
})
export class QuizModule { }
