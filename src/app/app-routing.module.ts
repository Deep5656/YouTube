import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewVideoComponent } from "./view-video/view-video.component";
import { HomePageComponent } from "./home-page/home-page.component";

export const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path: "view-video",
    component: ViewVideoComponent
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule],
})
export class AppRoutingModule {}
