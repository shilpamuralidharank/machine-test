import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-field',
  templateUrl: './login-field.component.html',
  styleUrls: ['./login-field.component.scss']
})
export class LoginFieldComponent implements OnInit {
  @Input() inputFields;
  emailRegex: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  passwordRegex: RegExp = /^\S{6,}$/
  validEmail: boolean;
  validPassword: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  emailChange(event) {
    let inputFieldCredentials = {
      email: this.inputFields.primaryEmail,
      password: this.inputFields.password,
      isButtonEnable: false
    }
    this.validEmail = this.emailRegex.test(event);
    if (this.validEmail && this.validPassword) {
      inputFieldCredentials.isButtonEnable = true;
      this.authService.setLoginCredentials(inputFieldCredentials);
    } else {
      this.authService.setLoginCredentials(inputFieldCredentials);
    }
  }
  passwordChange(event) {
    let inputFieldCredentials = {
      email: this.inputFields.primaryEmail,
      password: this.inputFields.password,
      isButtonEnable: false
    }
    this.validPassword = this.passwordRegex.test(event);
    if (this.validEmail && this.validPassword) {
      inputFieldCredentials.isButtonEnable = true;
      this.authService.setLoginCredentials(inputFieldCredentials);
    } else {
      this.authService.setLoginCredentials(inputFieldCredentials);
    }
  }
}
