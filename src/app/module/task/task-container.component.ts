import { Component, HostBinding } from '@angular/core';
import { SidenavService } from './service/sidenav.service';

@Component({
  selector: 'task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
  constructor(public sidenavService: SidenavService) {}

  @HostBinding('class.is-expanded')
  get isExpanded() {
    return this.sidenavService.isExpanded();
  }
}
