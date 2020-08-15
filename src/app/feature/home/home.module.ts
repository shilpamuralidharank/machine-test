import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageTopSectionComponent } from './home-page-top-section/home-page-top-section.component';
import { HomePageKeySectionComponent } from './home-page-key-section/home-page-key-section.component';


@NgModule({
  declarations: [HomePageComponent, HomePageTopSectionComponent, HomePageKeySectionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
