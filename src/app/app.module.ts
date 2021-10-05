import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FootBarComponent } from './footer/foot-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { MetaMapComponent } from './meta-map/meta-map.component';
import { MetaGrinderComponent } from './meta-grinder/meta-grinder.component';
import { WallofFameComponent } from './wallof-fame/wallof-fame.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { MetaNinComponent } from './meta-nin/meta-nin.component';
import { CardComponent } from './explore/components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { UserInfoComponent } from './top-bar/user-info.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, TopBarComponent, FootBarComponent, AboutComponent, ExploreComponent, MetaMapComponent, MetaGrinderComponent, WallofFameComponent, SignupComponent, SigninComponent, MetaNinComponent, CardComponent, UserInfoComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
