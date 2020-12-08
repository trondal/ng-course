import { createReducer, on } from '@ngrx/store';

import { retrievedLessonList } from './lessons.actions';
import { Lesson } from '../interfaces/lesson.interface';

export const initialState: ReadonlyArray<Lesson> = [];

export const lessonsReducer = createReducer(
  initialState,
  on(retrievedLessonList, (state, { Lessons }) => {
    return [...Lessons];
  })
);
