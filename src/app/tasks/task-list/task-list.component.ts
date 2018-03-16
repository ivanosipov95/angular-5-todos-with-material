import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.styl']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
