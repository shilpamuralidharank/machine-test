import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginMainComponent } from './login-main/login-main.component';
import { LoginParentComponent } from './login-parent/login-parent.component';
import { LoginFieldComponent } from './login-field/login-field.component';
import { LoginSaveComponent } from './login-save/login-save.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginMainComponent, LoginParentComponent, LoginFieldComponent, LoginSaveComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AuthModule { }
