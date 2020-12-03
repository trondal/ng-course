import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from 'src/app/interfaces/course.interface';
import { Question } from 'src/app/interfaces/question.interface';
import { ensure } from 'src/app/utilities/ensure';
import course from './course.json';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  public course: Course = course;

  constructor() {}

  /* getQuestions(): Observable<Question[]> {
    return of(course.questions);
  } */

  getQuestion(id: number | string): Question {
    return ensure(course.questions.find((question) => question.id === +id));
    /* return this.getQuestions().pipe(
      // (+) before `id` turns the string into a number
      map((questions: Question[]) =>
        ensure(questions.find((question) => question.id === +id))
      )
    ); */
  }
}
