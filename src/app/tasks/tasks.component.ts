import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NAV_LINKS} from './model/tasks.constant';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.styl']
})
export class TasksComponent implements OnInit {

  navLinks = NAV_LINKS;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/tasks/relevant']);
  }

}
