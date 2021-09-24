import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './headers/top-bar.component';
import { FootBarComponent } from './footer/foot-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, HelloComponent, TopBarComponent, FootBarComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
