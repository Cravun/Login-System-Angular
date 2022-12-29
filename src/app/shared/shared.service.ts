import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  username: string = '';
  constructor() {}
  registeredUsername() {
    this.username = this.username;
  }
  getRegisteredUsername() {
    return this.username;
  }
}
