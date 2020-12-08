/* import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { ensure } from 'src/app/utilities/ensure';
import { Lesson } from 'src/app/interfaces/lesson.interface';

export const selectBooks = createSelector(
  (state: AppState) => state.lessons,
  (books: Lesson[]) => books
);

export const selectCollectionState = createFeatureSelector<AppState, string[]>(
  'collection'
);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Lesson[], collection: string[]) => {
    return collection.map((id) => ensure(books.find((book) => book.id === id)));
  }
); */
