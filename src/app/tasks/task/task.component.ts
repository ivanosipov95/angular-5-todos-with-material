import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../model/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.styl']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  taskOptions = [
    {
      icon: 'mode_edit',
      label: 'Edit'
    },
    {
      icon: 'remove',
      label: 'Remove'
    },
    {
      icon: 'done',
      label: 'Complete'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
