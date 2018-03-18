import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import {TasksService} from '../';
import {Task} from '../model';

@Injectable()
export class ActiveTasksResolveService implements Resolve<Task[]> {

  constructor(
    private tasksService: TasksService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Task[]> {
    return this.tasksService.getTasks();
  }
}
