import { Book } from '../book-list/books.model';

export interface AppState {
  books: Book[];
  collection: string[];
}
