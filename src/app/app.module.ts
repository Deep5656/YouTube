import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewVideoComponent } from './view-video/view-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
  ],
  exports:[HomePageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
