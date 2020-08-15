import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../feature/home/home-page/home-page.component';
import { LoginMainComponent } from '../feature/auth/login-main/login-main.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
