import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Lesson } from '../interfaces/lesson.interface';
import { ensure } from 'src/app/utilities/ensure';

export const selectLessons = createSelector(
  (state: AppState) => state.lessons,
  (books: Lesson[]) => books
);

export const selectCollectionState = createFeatureSelector<AppState, string[]>(
  'collection'
);

export const selectLessonCollection = createSelector(
  selectLessons,
  selectCollectionState,
  (lessons: Lesson[], collection: string[]) => {
    return collection.map((id) =>
      ensure(lessons.find((lesson) => lesson.id === id))
    );
  }
);
