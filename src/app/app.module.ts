import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

import { lessonsReducer } from './state/lessons.reducer';
import { collectionReducer } from './state/collection.reducer';
import { MetaReducer, META_REDUCERS, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LessonCollectionComponent } from 'src/app/lesson-collection/lesson-collection.component';
import { LessonListComponent } from 'src/app/lesson-list/lesson-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { storageMetaReducer } from 'src/app/state/storage.metareducer';
import { LocalStorageService } from 'src/app/state/local-storage.service';
import { ROOT_LOCAL_STORAGE_KEY, ROOT_STORAGE_KEYS } from 'src/app/app.tokens';

export function getMetaReducers(
  saveKeys: string,
  localStorageKey: string,
  storageService: LocalStorageService
): MetaReducer<any>[] {
  return [storageMetaReducer(saveKeys, localStorageKey, storageService)];
}

@NgModule({
  declarations: [
    AppComponent,
    IntroPageComponent,
    QuestionPageComponent,
    ResultPageComponent,
    LessonListComponent,
    LessonCollectionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    { provide: ROOT_STORAGE_KEYS, useValue: ['layout.theme'] },
    { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__' },
    {
      provide: META_REDUCERS,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: getMetaReducers,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
