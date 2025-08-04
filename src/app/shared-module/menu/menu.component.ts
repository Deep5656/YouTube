import { Component, Input } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  @Input() isMenuOpen: boolean = false;
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
