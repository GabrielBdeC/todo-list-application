import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TaskContainerComponent } from './task-container.component';
import { ListService } from './service/list.service';
import { SidenavService } from '../../shared/service/sidenav.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { ListComponent } from './component/list/list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogListComponent } from './component/list/dialog/dialog-list.component';
import { TaskComponent } from './component/task/task.component';
import { TaskService } from './service/task.service';
import { DialogTaskComponent } from './component/task/dialog/dialog-task.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [TaskContainerComponent, ListComponent, DialogListComponent, TaskComponent, DialogTaskComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  providers: [ListService, SidenavService, TaskService],
  exports: [TaskContainerComponent],
})
export class TaskModule {}
