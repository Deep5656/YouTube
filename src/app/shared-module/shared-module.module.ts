import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './services/menu.service';



@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    MenuService
  ],
  exports:[
    HeaderComponent,
    MenuComponent,
    CommonModule
  ]
})
export class SharedModuleModule { }
