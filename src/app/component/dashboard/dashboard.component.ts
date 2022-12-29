import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  constructor(public auth: AuthService) {}
  ngOnInit(): void {
    // this.username = this.shared.getRegisteredUsername();
  }

  Logout() {
    this.auth.logout();
  }
}
