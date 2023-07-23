import { Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/service/sidenav.service';
import { List } from './model/list.model';

@Component({
  selector: 'task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
  public selectedList: List | null;

  constructor(public sidenavService: SidenavService) {}

  showTasks(list: List | null) {
    this.selectedList = list;
  }
}
