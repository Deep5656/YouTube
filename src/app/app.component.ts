import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './shared-module/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './shared-module/menu/menu.component';
import '@fortawesome/fontawesome-free/css/all.min.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    imports: [
    CommonModule,      // for ngIf, ngClass, ngFor
    HeaderComponent,   // now <app-header> is known
    MenuComponent,
    HomePageComponent
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube';

  menuOpen:boolean = false;
  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  
}
