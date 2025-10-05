import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faFire, faPhotoVideo, faFilm, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {

  @Input() isMenuOpen: boolean = false;
  buttonList = [
    { icon: faHome, label: "Home" },
    { icon: faFire, label: "Trending" },
    { icon: faPhotoVideo, label: "Subscriptions" },
    { icon: faFilm, label: "Library" },
    { icon: faClock, label: "History" },
    { icon: faClock, label: "Watch Later" },
    { icon: faThumbsUp, label: "Liked Videos" },
  ];


}
