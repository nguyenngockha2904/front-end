import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap5',
  templateUrl: './baitap5.component.html',
  styleUrls: ['./baitap5.component.scss'],
})
export class Baitap5Component implements OnInit {
  name: string = 'Kha';
  isLogin: boolean = false;
  username: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {}
  handleClick(): void {
    type Credentials = {
      username: string;
      password: string;
    };
    const credentials: any = {
      username: this.username,
      password: this.password,
    };
    // console.log(credentials);
    localStorage.setItem('credentials', JSON.stringify(credentials));
    if (this.username === 'cybersoft' && this.password === 'cybersoft') {
      this.isLogin = true;
    }
  }
}
