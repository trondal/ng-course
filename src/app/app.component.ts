import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { retrievedBookList, addBook, removeBook } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';
import { Book } from 'src/app/book-list/books.model';
import * as BookActions from './state/books.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-course';

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) {
    const foo = select(selectBooks);
  }

  onAdd(bookId: any): void {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any): void {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe((Books) => {
      return this.store.dispatch(retrievedBookList({ Books }));
    });
  }
}
