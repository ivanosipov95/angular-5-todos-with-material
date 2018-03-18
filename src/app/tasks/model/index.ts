import {InjectionToken} from '@angular/core';

export const TaskService = new InjectionToken<any[]>('TaskService');

export * from './task.model';
export * from './tasks.constant';
