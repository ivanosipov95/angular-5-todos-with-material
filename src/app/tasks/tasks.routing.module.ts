import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {
  TasksComponent,
  TaskListComponent
} from '.';
import {ActiveTasksResolveService} from './services/active-tasks-resolve.service';
import {COMPLETED, RELEVANT} from './model';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    children: [
      {
        path: 'relevant',
        component: TaskListComponent,
        data: {
          api: RELEVANT
        },
        resolve: {
          tasks: ActiveTasksResolveService,
        }
      },
      {
        path: 'completed',
        component: TaskListComponent,
        data: {
          api: COMPLETED
        },
        resolve: {
          tasks: ActiveTasksResolveService,
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
