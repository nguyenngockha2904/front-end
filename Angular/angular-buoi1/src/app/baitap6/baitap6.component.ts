import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss'],
})
export class Baitap6Component implements OnInit {
  listSp: Array<any>;
  constructor() {
    if (!JSON.parse(localStorage.getItem('listSp'))) {
      this.listSp = new Array();
    } else {
      this.listSp = JSON.parse(localStorage.getItem('listSp'));
    }
  }
  handleAdd(msp, tsp, gsp): void {
    type SanPham = {
      maSp: string;
      tenSp: string;
      giaSp: number;
    };
    let item: SanPham = {
      maSp: msp.value,
      tenSp: tsp.value,
      giaSp: gsp.value,
    };
    this.listSp.push(item);
    localStorage.setItem('listSp', JSON.stringify(this.listSp));
    msp.value = '';
    tsp.value = '';
    gsp.value = '';
  }
  ngOnInit(): void {}
}
