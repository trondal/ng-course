import { createAction, props } from '@ngrx/store';
import { Lesson } from 'src/app/interfaces/lesson.interface';

export const addLesson = createAction(
  '[Lesson List] Add Lesson',
  props<{ lessonId: string }>()
);

export const removeLesson = createAction(
  '[Lesson Collection] Remove Lesson',
  props<{ lessonId: string }>()
);

export const retrievedLessonList = createAction(
  '[Lesson List/API] Retrieve Lessons Success',
  props<{ Lessons: Lesson[] }>()
);
