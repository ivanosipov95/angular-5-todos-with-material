import {Component, Inject, OnInit} from '@angular/core';
import {Task} from '../model/task.model';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../model';
import {TaskListService} from '../model/task-list';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.styl']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  private service: TaskListService;

  constructor(private route: ActivatedRoute,
              @Inject(TaskService) private taskServices: TaskListService[]) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.service = this.getService();
      this.tasks = this.service.getFilteredTasks(data.tasks);
    });
  }

  private getService(): TaskListService {
    return this.taskServices.find(s => s.getApi() === this.route.snapshot.data['api']);
  }
}
