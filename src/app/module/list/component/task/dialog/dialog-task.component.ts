import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../../../model/task.model';

@Component({
  templateUrl: './dialog-task.component.html',
  styleUrls: ['./dialog-task.component.scss'],
})
export class DialogTaskComponent {
  public value: Task = new Task();

  constructor(
    @Inject(MAT_DIALOG_DATA) public task: Task,
    public dialogRef: MatDialogRef<DialogTaskComponent>,
  ) {
    if (task) {
      this.value = task;
    }
  }

  cancel() {
    this.dialogRef.close({ success: false });
  }

  response() {
    this.dialogRef.close({ success: true, data: this.value });
  }
}
