import { Question } from 'src/app/interfaces/question.interface';

export interface Course {
  name: string;
  questions: Question[];
}
