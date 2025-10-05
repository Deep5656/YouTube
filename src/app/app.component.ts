import { Component } from "@angular/core";
import { MenuService } from "./shared-module/services/menu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
