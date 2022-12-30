import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    // this.shared.registeredUsername(this.username);
  }

  // Register Method
  register(): void {
    // If Register Doesn't have an email
    // Alert will show enter Email
    if (this.email == '') {
      Swal.fire({
        icon: 'question',
        title: 'Please Enter Email',
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: false, // There won't be any confirm button
      });
      return;
    }
    // If Register Doesn't have an password
    // Alert will show enter Password
    if (this.password == '') {
      Swal.fire({
        icon: 'question',
        title: 'Please Enter Password',
        showCancelButton: false, // There won't be any cancel button
        showConfirmButton: false, // There won't be any confirm button
      });
      return;
    }
    // Authenticating input using Angular Fire Module
    // if both input match to the relational database
    this.auth.register(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
