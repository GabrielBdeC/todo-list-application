import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private expanded = true;

  public isExpanded() {
    return this.expanded;
  }

  toggleSidenav() {
    this.expanded = !this.expanded;
  }

  expandSidenav() {
    this.expanded = true;
  }

  collapseSidenav() {
    this.expanded = false;
  }
}
