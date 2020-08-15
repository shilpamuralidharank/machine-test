import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingMainPageComponent } from './landing-main-page/landing-main-page.component';


@NgModule({
  declarations: [LandingMainPageComponent],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
