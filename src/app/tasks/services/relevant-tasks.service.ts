import {Injectable} from '@angular/core';

import {Task, RELEVANT} from '../model';
import {TaskListService} from '../model/task-list';

@Injectable()
export class RelevantTasksService implements TaskListService {

  constructor() {
  }

  getFilteredTasks(tasks: Task[]): Task[] {
    return tasks.filter((task: Task) => task.completed === false);
  }

  getApi(): string {
    return RELEVANT;
  }
}
