import {Injectable} from '@angular/core';

import {Task, COMPLETED} from '../model';
import {TaskListService} from '../model/task-list';

@Injectable()
export class CompletedTasksService implements TaskListService {

  constructor() {
  }

  getFilteredTasks(tasks: Task[]): Task[] {
    return tasks.filter((task: Task) => task.completed === true);
  }

  getApi(): string {
    return COMPLETED;
  }
}
