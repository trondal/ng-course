import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';

import { map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/interfaces/question.interface';
import { QuestionsService } from 'src/app/services/question.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  //public readonly question$: Observable<Question>;
  public readonly page$: Observable<number>;
  public readonly length$: Observable<number>;
  public readonly question$: Observable<Question>;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) {
    this.page$ = this.route.paramMap.pipe(
      map((params: ParamMap) => {
        const pageNumber = params.get('id');
        if (pageNumber) {
          return +pageNumber;
        }
        return 0;
      })
    );
    this.question$ = this.questionsService.question$;
    this.length$ = this.questionsService.length$;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // (+) converts string 'id' to a number
      this.id = +params['id'];
      // this.question = this.courseService.getQuestion(this.id as number);
      console.log(this.id);
    });
  }
}
