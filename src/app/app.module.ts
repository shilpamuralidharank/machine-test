import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './feature/home/home.module';
import { AuthModule } from './feature/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeatureModule,
    HomeModule,
    AuthModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
