import { Lesson } from './lesson.interface';

export interface AppState {
  lessons: Lesson[];
  collection: string[];
  selectedLesson: Lesson;
  theme: 'dark' | 'light';
}
