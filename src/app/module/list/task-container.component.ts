import { Component } from '@angular/core';
import { SidenavService } from 'src/app/shared/service/sidenav.service';

@Component({
  selector: 'task-container',
  templateUrl: './task-container.component.html',
  styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
  constructor(public sidenavService: SidenavService) {}
}
