import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private expanded = true;

  public isExpanded() {
    return this.expanded;
  }

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public expandExpanded() {
    this.expanded = true;
  }

  public collapseExpanded() {
    this.expanded = false;
  }
}
