import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroPageComponent } from 'src/app/pages/intro-page/intro-page.component';
import { QuestionPageComponent } from 'src/app/pages/question-page/question-page.component';
import { ResultPageComponent } from 'src/app/pages/result-page/result-page.component';

// https://levelup.gitconnected.com/ngrx-and-angular-route-guards-a3fc3d5255f8
const routes: Routes = [
  {
    path: 'intro',
    component: IntroPageComponent,
  },
  {
    path: 'question/:id',
    component: QuestionPageComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
