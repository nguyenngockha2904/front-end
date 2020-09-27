import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  message: string = 'hello';
  disable: boolean = false;
  username: string = '';
  constructor() {}
  email: string = '';
  address: string = '';

  ngOnInit(): void {}
  changeMessage(message: string): void {
    this.message = message;
  }
  changeUsername(element: any): void {
    console.log(element.value);
  }
  changeEmail(event: any): void {
    this.email = event.target.value;
  }
}
