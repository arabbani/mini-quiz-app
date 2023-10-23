import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { QuizComponent } from './quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: 'result',
        component: ResultComponent
      },
      {
        path: '',
        component: GameComponent,
        children: [
          {
            path: ':questionNumber',
            component: QuestionComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
