import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //  Background
  Background: string = 'assets/BG.png';
  // ----------------------------------
  email: string = '';
  password: string = '';

  // Injecting auth-service to use FireAngularAuth Function
  constructor(
    private auth: AuthService,
    private Sanitizer: DomSanitizer,
    private MatIcon: MatIconRegistry
  ) {
    this.MatIcon.addSvgIcon(
      'Logo-Karl',
      this.Sanitizer.bypassSecurityTrustResourceUrl('.../assets/svg/logo.svg')
    );
  }

  ngOnInit(): void {}

  // Login Method
  login() {
    // If Login Doesn't have an email
    // Alert will show enter Email
    if (this.email == '') {
      alert('Please Enter Email');
      return;
    }
    // If Login Doesn't have an password
    // Alert will show enter Password
    if (this.password == '') {
      alert('Please Enter Password');
      return;
    }

    // Authenticating input using Angular Fire Module
    // if both input match to the relational database
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
