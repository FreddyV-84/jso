import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Vb00Component } from './vb00/vb00.component';


@NgModule({
  declarations: [
    AppComponent,
    Vb00Component    // klassenamen van componenten die in deze module gedefinieerd zijn
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // welke componenten implementeren we op index.html app-root
})
export class AppModule { }
