<<<<<<< HEAD
import { Component, OnInit, OnDestroy } from "@angular/core";
import { MenuService } from "../services/menu.service";
import { Subscription } from "rxjs";
=======
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faHome, faFire, faPhotoVideo, faFilm, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
>>>>>>> 4459a21a137b4e2aad2d7097e88e755b5ce338f8

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ["./menu.component.scss"],
})
<<<<<<< HEAD
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

=======
export class MenuComponent {

  @Input() isMenuOpen: boolean = false;
>>>>>>> 4459a21a137b4e2aad2d7097e88e755b5ce338f8
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
