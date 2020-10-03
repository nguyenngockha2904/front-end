import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss'],
})
export class Baitap6Component implements OnInit {
  maSp: string = '';
  tenSp: string = '';
  giaSp: number = 0;
  listSp: Array<any>;
  constructor() {
    this.listSp = new Array();
    this.listSp = JSON.parse(localStorage.getItem('listSp'));
  }
  handleAdd(): void {
    type SanPham = {
      maSp: string;
      tenSp: string;
      giaSp: number;
    };
    let item: SanPham = {
      maSp: this.maSp,
      tenSp: this.tenSp,
      giaSp: this.giaSp,
    };
    this.listSp.push(item);
    localStorage.setItem('listSp', JSON.stringify(this.listSp));
  }
  ngOnInit(): void {}
}
