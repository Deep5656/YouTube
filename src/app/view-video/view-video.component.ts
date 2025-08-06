import { Component } from "@angular/core";

@Component({
  selector: "app-view-video",
  templateUrl: "./view-video.component.html",
  styleUrls: ["./view-video.component.scss"],
})
export class ViewVideoComponent {
  cinemaMode() {
    const mainVideo = document.getElementById("main-video");
    const videoSuggetions = document.getElementById("video-suggestion");
    if (mainVideo && videoSuggetions) {
      mainVideo.style.width = "94vw";
      videoSuggetions.style.position = "relative";
      videoSuggetions.style.top = "75vh";
    }
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
