import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/interfaces/lesson.interface';
import { Question } from 'src/app/interfaces/question.interface';
import { ensure } from 'src/app/utilities/ensure';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private http: HttpClient) {}

  getLessons(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>('./assets/lessons.json');
  }

  /* getLessonByName(name: string) {
    return ensure(
      this.allLessons.find(lesson: Lesson) => {
        return lesson.name === name;
      }
    )
  } */

  /* getQuestions(): Observable<Question[]> {
    return of(course.questions);
  } */

  /* getQuestion(id: number | string): Question {
    return ensure(
      this.allLessons[0].questions.find((question: Question) => {
        // (+) before `id` turns the string into a number
        return question.id === +id;
      })
    );
  } */
}
