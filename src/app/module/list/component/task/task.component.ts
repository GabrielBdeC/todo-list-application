import { Component, Input, OnInit } from '@angular/core';
import { List } from '../../model/list.model';
import { TaskService } from '../../service/task.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../../model/task.model';
import { ListService } from '../../service/list.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogTaskComponent } from './dialog/dialog-task.component';

@Component({
  selector: 'task-task-container',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() list: List | null;

  public taskFormGroup: FormGroup;
  highlightedItem: string | null;

  constructor(
    private listService: ListService,
    private taskService: TaskService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.taskFormGroup = new FormGroup({
      name: new FormControl(''),
    });
  }

  public onSubmit() {
    if (this.list !== null) {
      const taskName = this.taskFormGroup.get('name')?.value;
      const newTask = new Task();
      newTask.done = false;
      newTask.list = new List();
      newTask.list.id = this.list.id;
      newTask.name = taskName;
      this.taskService.create(newTask).subscribe(() => {
        this.taskFormGroup.get('name')?.setValue('');
        this.refresh();
      });
    }
  }

  public refresh() {
    if (this.list !== null) {
      this.listService.getOne(this.list?.id).subscribe(list => (this.list = list));
    }
  }

  public setHighlightedItem(id: string | null) {
    this.highlightedItem = id;
  }

  public isHighlightedItem(item: string | null): boolean {
    return this.highlightedItem === item;
  }

  public changeCheck(id: string) {
    const task = this.list?.taskItems.find(task => task.id === id);
    if (task) {
      this.taskService.update(task).subscribe(() => {
        this.refresh();
      });
    }
  }

  public renameItem(id: string | null) {
    const dialogRef = this.dialog.open(DialogTaskComponent, {
      data: structuredClone(this.list?.taskItems.find(el => el.id === id)),
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response.success) {
        this.taskService.update(response.data).subscribe(() => {
          this.refresh();
        });
      }
    });
  }

  public removeItem(id: string) {
    this.taskService.remove(id).subscribe(() => {
      this.refresh();
    });
  }
}
