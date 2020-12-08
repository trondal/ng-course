import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../interfaces/lesson.interface';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss'],
})
export class LessonListComponent {
  @Input() lessons: Array<Lesson> = [];
  @Output() add = new EventEmitter();
}
