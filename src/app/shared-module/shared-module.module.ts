import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports:[
    // HeaderComponent,
    // MenuComponent,
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModuleModule { }
