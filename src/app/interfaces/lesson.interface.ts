import { Question } from 'src/app/interfaces/question.interface';

export interface Lesson {
  id: string;
  name: string;
  displayName: string;
  language: string;
  questions: Question[];
}
