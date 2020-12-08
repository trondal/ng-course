import { createReducer, on, Action } from '@ngrx/store';
import { addLesson, removeLesson } from './lessons.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeLesson, (state, { lessonId }) =>
    state.filter((id) => id !== lessonId)
  ),
  on(addLesson, (state, { lessonId }) => {
    if (state.indexOf(lessonId) > -1) {
      return state;
    }

    return [...state, lessonId];
  })
);
