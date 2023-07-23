import { Component, OnInit } from '@angular/core';
import { List } from '../../model/list.model';
import { ListService } from '../../service/list.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogListComponent } from './dialog/dialog-list.component';
import { SidenavService } from '../../../../shared/service/sidenav.service';

@Component({
  selector: 'task-list-container',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listItems: List[];
  selectedItem: string | null;

  constructor(
    private listService: ListService,
    private dialog: MatDialog,
    public sidenavService: SidenavService,
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.listService.getAll().subscribe((list: List[]) => (this.listItems = list));
  }

  selectList(id: string) {
    console.log(`List ${id}`);
  }

  deleteItem(id: string) {
    this.listService.remove(id).subscribe(() => {
      this.refresh();
    });
  }

  updateItem(id: string) {
    const dialogRef = this.dialog.open(DialogListComponent, {
      data: { isNew: false, list: this.listItems.find(el => el.id === id) },
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response.success) {
        this.listService.update(response.data).subscribe(() => {
          this.refresh();
        });
      }
    });
  }

  setSelectedItem(id: string | null) {
    this.selectedItem = id;
  }

  isSelectedItem(item: string | null): boolean {
    return this.selectedItem === item;
  }

  createList() {
    const dialogRef = this.dialog.open(DialogListComponent, { data: { isNew: true } });
    dialogRef.afterClosed().subscribe(response => {
      if (response.success) {
        this.listService.create(response.data).subscribe(() => {
          this.refresh();
        });
      }
    });
  }
}
