import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../interfaces/lesson.interface';

@Component({
  selector: 'app-lesson-collection',
  templateUrl: './lesson-collection.component.html',
  styleUrls: ['./lesson-collection.component.scss'],
})
export class LessonCollectionComponent {
  @Input() lessons: Array<Lesson> = [];
  @Output() remove = new EventEmitter();
}
