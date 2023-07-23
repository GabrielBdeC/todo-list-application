import { Component } from '@angular/core';
import { SidenavService } from '../../service/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent {
  constructor(public sidenavService: SidenavService) {}
}
