import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksRoutingModule} from './tasks.routing.module';
import {MaterialModule} from '../common/material/material.module';

import {TasksComponent} from './tasks.component';
import {TaskListComponent} from './task-list/task-list.component';
import {TasksService} from './tasks.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    TasksRoutingModule
  ],
  declarations: [
    TasksComponent,
    TaskListComponent
  ],
  providers: [
    TasksService
  ]
})
export class TasksModule {
}
