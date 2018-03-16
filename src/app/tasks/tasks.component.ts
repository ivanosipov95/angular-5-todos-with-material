import {Component, OnInit} from '@angular/core';
import {Task} from './model/task.model';
import {HttpClient} from '@angular/common/http';
import {TasksService} from './tasks.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.styl']
})
export class TasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private http: HttpClient,
              private taskService: TasksService) {
  }

  ngOnInit() {
    this.tasks$ = this.taskService.getTasks();
  }

}
