import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "../services/menu.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit, OnDestroy {
  isMenuOpen: boolean = false;
  private subscription: Subscription;

  constructor(private _menuService: MenuService) {}

  ngOnInit(): void {
    this.subscription = this._menuService.menuState$.subscribe((isOpen) => {
      this.isMenuOpen = isOpen;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  buttonList = [
    { icon: "fa-solid fa-house", label: "Home" },
    { icon: "fa-solid fa-fire", label: "Trending" },
    { icon: "fa-solid fa-photo-film", label: "Subscriptions" },
    { icon: "fa-solid fa-film", label: "Library" },
    { icon: "fa-solid fa-clock-rotate-left", label: "History" },
    { icon: "fa-solid fa-clock", label: "Watch Later" },
    { icon: "fa-solid fa-thumbs-up", label: "Liked Videos" },
  ];
}
