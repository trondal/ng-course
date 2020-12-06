import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { retrievedBookList, addBook, removeBook } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-course';

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  onAdd(bookId: any) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: any) {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
