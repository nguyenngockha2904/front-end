import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss'],
})
export class AttributeDirectiveComponent implements OnInit {
  isActive: boolean = false;
  url: string =
    'https://img.vn/uploads/thuvien/viber-image-2019-08-06-10-40-38-jpg-20190807145944LO3qbinQdG.jpg';
  message: string = 'Hello';
  constructor() {}

  ngOnInit(): void {}
}
