import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  retrievedLessonList,
  addLesson,
  removeLesson,
} from './state/lessons.actions';
/* import { GoogleBooksService } from './book-list/books.service';
import { Lesson } from 'src/app/interfaces/lesson.interface';
import * as BookActions from './state/books.actions'; */
import { AppState } from 'src/app/state/app.state';
import { LessonService } from 'src/app/services/lesson.service';
import {
  selectLessonCollection,
  selectLessons,
} from 'src/app/state/lessons.selectors';
import { Observable } from 'rxjs';
import { Lesson } from 'src/app/interfaces/lesson.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-course';

  //books$ = this.store.pipe(select(selectBooks));
  lessonCollection$ = this.store.pipe(select(selectLessonCollection));
  lessons$ = this.store.pipe(select(selectLessons));

  constructor(
    // private booksService: GoogleBooksService,
    private lessonService: LessonService,
    private store: Store<AppState>
  ) {
    // const foo = select(selectBooks);
  }

  onAdd(lessonId: any): void {
    this.store.dispatch(addLesson({ lessonId }));
  }

  onRemove(lessonId: any): void {
    this.store.dispatch(removeLesson({ lessonId }));
  }

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((Lessons) => {
      return this.store.dispatch(retrievedLessonList({ Lessons }));
    });
  }
}
