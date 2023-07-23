import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TaskContainerComponent } from './task-container.component';
import { ListService } from './service/list.service';
import { TaskService } from './service/task.service';
import { SidenavService } from './service/sidenav.service';
import { SidenavLinkComponent } from './sidenav-link/sidenav-link.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ListComponent } from './component/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DialogListComponent } from './component/dialog/dialog-list.component';

@NgModule({
  declarations: [TaskContainerComponent, SidenavLinkComponent, ListComponent, DialogListComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [ListService, TaskService, SidenavService],
  exports: [TaskContainerComponent],
})
export class TaskModule {}
