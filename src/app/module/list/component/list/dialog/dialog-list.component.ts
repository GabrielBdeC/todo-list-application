import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { List } from '../../../model/list.model';

export interface DialogListComponentData {
  isNew: boolean;
  list: List;
}

@Component({
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.scss'],
})
export class DialogListComponent {
  public value: List = new List();
  public isNew: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogListComponentData,
    public dialogRef: MatDialogRef<DialogListComponent>,
  ) {
    this.isNew = data.isNew;
    if (data.list) {
      this.value = data.list;
    }
  }

  cancel() {
    this.dialogRef.close({ success: false });
  }

  response() {
    this.dialogRef.close({ success: true, data: this.value });
  }
}
