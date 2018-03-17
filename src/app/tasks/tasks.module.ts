import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks.routing.module';
import {MaterialModule} from '../common/material/material.module';

import {
  TasksComponent,
  TaskListComponent,
  TaskComponent,
  TasksService
} from '.';

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
    TasksService
  ]
})
export class TasksModule {
}
