import { Lesson } from '../interfaces/lesson.interface';

export interface AppState {
  lessons: Lesson[];
  collection: string[];
  selectedLesson: Lesson;
  theme: 'dark' | 'light';
}
