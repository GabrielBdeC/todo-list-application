import { NgModule } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavBarComponent],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
