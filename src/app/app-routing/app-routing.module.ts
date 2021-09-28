
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { AboutComponent } from '../about/about.component';
import { ExploreComponent } from '../explore/explore.component';
import { MetaGrinderComponent } from '../meta-grinder/meta-grinder.component';
import { MetaMapComponent } from '../meta-map/meta-map.component';
import { WallofFameComponent } from '../wallof-fame/wallof-fame.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { MetaNinComponent } from '../meta-nin/meta-nin.component';



const appRoutes: Routes = [
  { path: 'MetaNin', component: MetaNinComponent },
  { path: 'Create', component: CreateComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Explore', component: ExploreComponent },
  { path: 'MetaGrinder', component: MetaGrinderComponent},
  { path: 'MetaMap', component: MetaMapComponent },
  { path: 'WallOfFame', component: WallofFameComponent },
  { path: 'SignIn', component: SigninComponent },
  { path: 'SignUp', component: SignupComponent },
  { path: '', redirectTo: '/MetaNin', pathMatch: 'full' },

  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(
      appRoutes
    )], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
