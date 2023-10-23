import { Injectable } from '@angular/core';

type QuizQuestion = {
  question: string,
  options: string[],
  answer: string
}

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly questions: QuizQuestion[] = [
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Polar Bear'],
      answer: 'Blue Whale',
    },
    {
      question:
        'Which gas do plants absorb from the atmosphere during photosynthesis?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      answer: 'Carbon Dioxide',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Ag', 'Au', 'Ge'],
      answer: 'Au',
    },
    {
      question:
        "Which planet is known as the 'Morning Star' or 'Evening Star' due to its brightness?",
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      answer: 'Venus',
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Skin', 'Liver', 'Lungs'],
      answer: 'Skin',
    },
  ];

  _currentQuestionNumber: number = 1;

  constructor() {}

  get numberOfQuestions() {
    return this.questions.length;
  }

  get currentQuestionNumber() {
    return this._currentQuestionNumber;
  }

  set currentQuestionNumber(questionNumber: number) {
    this._currentQuestionNumber = questionNumber;
  }

  getQuestions() {
    return this.questions;
  }

  getQuestion(questionNumber: number) {
    return this.questions[questionNumber];
  }

}
