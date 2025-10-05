import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import standalone components
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './shared-module/header/header.component';
import { MenuComponent } from './shared-module/menu/menu.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,       // Standalone component
    HomePageComponent,  // Standalone component
    HeaderComponent,    // Standalone component
    MenuComponent       // Standalone component
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {}
