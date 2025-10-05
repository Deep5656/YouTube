import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { MenuService } from "../services/menu.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(private _menuService: MenuService) {}
  ngOnInit(): void {}

  clickMenu() {
    const current = this._menuService.currentMenuState;
    this._menuService.setMenuState(!current);
  }
}
