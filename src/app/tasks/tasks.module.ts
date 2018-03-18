import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks.routing.module';
import {MaterialModule} from '../common/material/material.module';

import {
  TasksComponent,
  TaskListComponent,
  TaskComponent,
  TasksService
} from '.';
import {
  ActiveTasksResolveService,
  CompletedTasksService,
  RelevantTasksService
} from './services';

import {TaskService} from './model';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TasksRoutingModule
  ],
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskComponent
  ],
  providers: [
    TasksService,
    ActiveTasksResolveService,
    { provide: TaskService, useClass: CompletedTasksService, multi: true},
    { provide: TaskService, useClass: RelevantTasksService, multi: true}
  ]
})
export class TasksModule {
}
