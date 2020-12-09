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
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { LessonCollectionComponent } from 'src/app/lesson-collection/lesson-collection.component';
import { LessonListComponent } from 'src/app/lesson-list/lesson-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/material.module';
import { MatNativeDateModule } from '@angular/material/core';

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
    StoreModule.forRoot({
      lessons: lessonsReducer,
      collection: collectionReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
