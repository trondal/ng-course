import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Lesson } from 'src/app/interfaces/lesson.interface';
import { Question } from 'src/app/interfaces/question.interface';
import { runInThisContext } from 'vm';
import lessonsRaw from '../../assets/lessons.json';

export class QuestionsService {
  private readonly currentQuestion$ = new BehaviorSubject<Question>({
    id: 0,
    name: 'start',
  });
  private questions: Question[] = [];
  private readonly currentLength$ = new BehaviorSubject<number>(-1);
  private readonly questionsDictionary = new Map<number, Question>();
  private index: number = 0;

  constructor() {
    const lesson: Lesson = lessonsRaw[0];
    lesson.questions.forEach((question: Question) => {
      this.questionsDictionary.set(question.id, question);
    });
    this.questions = lesson.questions;
    this.currentLength$.next(this.questions.length);
    this.currentQuestion$.next(this.questions[this.index]);
  }

  get question$(): Observable<Question> {
    return this.currentQuestion$.asObservable();
  }

  get length$(): Observable<number> {
    return this.currentLength$.asObservable();
  }
}
