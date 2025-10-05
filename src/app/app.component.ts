<<<<<<< HEAD
import { Component } from "@angular/core";
import { MenuService } from "./shared-module/services/menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
=======
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './shared-module/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './shared-module/menu/menu.component';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppRoutingModule } from "./app-routing.module";
import { RouterOutlet } from '@angular/router';
// import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    imports: [
    CommonModule, // for ngIf, ngClass, ngFor
    HeaderComponent, // now <app-header> is known
    MenuComponent,
    AppRoutingModule,
    RouterOutlet
],
  styleUrls: ['./app.component.scss']
>>>>>>> 4459a21a137b4e2aad2d7097e88e755b5ce338f8
})
export class AppComponent {
  title = "youtube";
  menuOpen = true;

  constructor(private _menuService: MenuService) {}
  ngOnInit() {
    this._menuService.menuState$.subscribe((state) => {
      this.menuOpen = state;
    });
  }

  toggleMenu() {
    this._menuService.setMenuState(!this.menuOpen);
  }
}
