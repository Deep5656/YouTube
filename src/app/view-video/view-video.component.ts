import { Component, OnInit } from "@angular/core";
import { MenuService } from "../shared-module/services/menu.service";

@Component({
  selector: "app-view-video",
  templateUrl: "./view-video.component.html",
  styleUrls: ["./view-video.component.scss"],
})
export class ViewVideoComponent implements OnInit {
  constructor(private _menuService: MenuService) {}
  ngOnInit(): void {
    this._menuService.menuState$.subscribe((isOpen) => {
      console.log("Menu is open:", isOpen);
    });
  }

  cinemaMode() {
    const mainVideo = document.getElementById("main-video");
    const videoSuggetions = document.getElementById("video-suggestion");
    if (mainVideo && videoSuggetions) {
      mainVideo.style.width = "143%";
      videoSuggetions.style.position = "relative";
      videoSuggetions.style.top = "75vh";
    }
    this._menuService.setMenuState(false);
  }

  defaultMode() {
    const mainVideo = document.getElementById("main-video");
    const videoSuggetions = document.getElementById("video-suggestion");

    if (mainVideo && videoSuggetions) {
      mainVideo.style.width = "100%"; // Or your original width
      videoSuggetions.style.position = "static";
      videoSuggetions.style.top = "unset";
    }
  }
}
