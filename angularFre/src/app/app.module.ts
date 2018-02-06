import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent    // klassenamen van componenten die in deze module gedefinieerd zijn
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // welke componenten implementeren we op index.html app-root
})
export class AppModule { }
