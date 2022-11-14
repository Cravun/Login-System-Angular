import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user: string = '';
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  Logout() {
    this.auth.logout();
  }
}