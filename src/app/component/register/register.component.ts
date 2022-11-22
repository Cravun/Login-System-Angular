import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  //  Background
  Background: string = 'assets/BG.png';
  // ----------------------------------
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  // Register Method
  register() {
    // If Register Doesn't have an email
    // Alert will show enter Email
    if (this.email == '') {
      alert('Please Enter Email');
      return;
    }
    // If Register Doesn't have an password
    // Alert will show enter Password
    if (this.password == '') {
      alert('Please Enter Password');
      return;
    }

    // Authenticating input using Angular Fire Module
    // if both input match to the relational database
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
