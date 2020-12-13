import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, META_REDUCERS, MetaReducer } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY } from 'src/app/app.tokens';
import { LayoutModule } from 'src/app/layout/layout.module';
import { LocalStorageService } from 'src/app/local-storage.service';
import { reducers } from 'src/app/reducers';
import { storageMetaReducer } from 'src/app/storage.metareducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environment

// factory meta-reducer configuration function
export function getMetaReducers(
  saveKeys: string[],
  localStorageKey: string,
  storageService: LocalStorageService
): MetaReducer<any>[] {
  return [storageMetaReducer(saveKeys, localStorageKey, storageService)];
}

@NgModule({
  declarations: [
    AppComponent,
    /* IntroPageComponent,
    QuestionPageComponent,
    ResultPageComponent,
    LessonListComponent,
    LessonCollectionComponent, */
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    { provide: ROOT_STORAGE_KEYS, useValue: ['layout.theme'] },
    {
      provide: ROOT_LOCAL_STORAGE_KEY,
      useValue: '__app_storage__',
    },
    {
      provide: META_REDUCERS,
      useFactory: getMetaReducers,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
