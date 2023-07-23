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
import { FormsModule } from '@angular/forms';
import { DialogListComponent } from './component/list/dialog/dialog-list.component';

@NgModule({
  declarations: [TaskContainerComponent, ListComponent, DialogListComponent],
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
  ],
  providers: [ListService, SidenavService],
  exports: [TaskContainerComponent],
})
export class TaskModule {}
