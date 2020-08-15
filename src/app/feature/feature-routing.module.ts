import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LandingMainPageComponent } from './landing/landing-main-page/landing-main-page.component';


const routes: Routes = [
  {
    path:'', 
    component: HomePageComponent,
  },
  {
    path:'landing', 
    component: LandingMainPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
