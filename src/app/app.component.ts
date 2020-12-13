import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
/* import {
  retrievedLessonList,
  addLesson,
  removeLesson,
} from './state/lessons.actions';
import { AppState } from 'src/app/interfaces/app.state';
import { LessonService } from 'src/app/services/lesson.service';
import {
  selectLessonCollection,
  selectLessons,
} from 'src/app/state/lessons.selectors'; */
import { AppTheme, APP_THEMES } from 'src/app/app.model';
import * as fromReducer from './reducers';
import { Observable } from 'rxjs';
import { SetActiveTheme } from 'src/app/actions/layout.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-course';
  appThemes = APP_THEMES;

  public activeTheme$: Observable<AppTheme>;

  constructor(private store: Store<fromReducer.State>) {}

  public ngOnInit(): void {
    this.activeTheme$ = this.store.select(fromReducer.getActiveTheme);
  }

  public themeSelected(theme: AppTheme) {
    this.store.dispatch(new SetActiveTheme(theme));
  }
  //lessonCollection$ = this.store.pipe(select(selectLessonCollection));
  //lessons$ = this.store.pipe(select(selectLessons));

  /* constructor(
    private lessonService: LessonService,
    private store: Store<AppState>
  ) {} */

  /* onAdd(lessonId: any): void {
    this.store.dispatch(addLesson({ lessonId }));
  }

  onRemove(lessonId: any): void {
    this.store.dispatch(removeLesson({ lessonId }));
  }

  ngOnInit(): void {
    this.lessonService.getLessons().subscribe((Lessons) => {
      return this.store.dispatch(retrievedLessonList({ Lessons }));
    });
  } */
}
