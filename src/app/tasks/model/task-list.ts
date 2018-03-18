import {Task} from './task.model';

export interface TaskListService {

  getFilteredTasks(tasks: Task[]): Task[];

  getApi(): string;

  // abstract editTask(): void;
  //
  // abstract removeTask(): void;
}
