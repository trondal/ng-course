import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Book } from '../book-list/books.model';
import { ensure } from 'src/app/utilities/ensure';

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Book[]) => books
);

export const selectCollectionState = createFeatureSelector<AppState, string[]>(
  'collection'
);

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Book[], collection: string[]) => {
    return collection.map((id) => ensure(books.find((book) => book.id === id)));
  }
);
