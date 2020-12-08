import { Question } from 'src/app/interfaces/question.interface';

export interface Lesson {
  id: string;
  name: string;
  questions: Question[];
}
