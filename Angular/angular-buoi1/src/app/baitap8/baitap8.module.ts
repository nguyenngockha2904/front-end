import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap8Component } from './baitap8.component';
import { DanhSachDatComponent } from './danh-sach-dat/danh-sach-dat.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GeComponent } from './ge/ge.component';
import {Routes,RouterModule} from '@angular/router';
const routes:Routes=[
  {path:'',component:Baitap8Component},
]

@NgModule({
  declarations: [Baitap8Component, DanhSachDatComponent, DanhSachGheComponent, GeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    // Baitap8Component
  ]
})
export class Baitap8Module { }
