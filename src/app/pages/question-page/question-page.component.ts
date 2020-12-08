import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';

import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Question } from 'src/app/interfaces/question.interface';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss'],
})
export class QuestionPageComponent implements OnInit {
  question: Question | undefined;
  id = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: LessonService
  ) {
    /* this.question$ = this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const id = params.get('id');
          console.log('foooo');
          if (!id) {
            console.error('Could not find question');
            throw new Error('Id not found :' + id);
          }
          return this.courseService.getQuestion(id);
        })
      )
      .subscribe(); */
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
