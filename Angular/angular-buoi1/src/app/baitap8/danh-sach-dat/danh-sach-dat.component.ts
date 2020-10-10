import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-danh-sach-dat',
  templateUrl: './danh-sach-dat.component.html',
  styleUrls: ['./danh-sach-dat.component.scss']
})
export class DanhSachDatComponent implements OnInit {
  mangGheDaDat:any=[];
  @Output() onCancel = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }
  xyLyGheDat(ghe:any):void{
    if(ghe.isActived){
      this.mangGheDaDat.push(ghe);
    }else{
      const index= this.mangGheDaDat.findIndex(item => item.soGhe ===ghe.soGhe);
      if(index!==-1){
        this.mangGheDaDat.splice(index,1);
      }
    }
  }
  handleCancel(ghe:any):void{
    const index= this.mangGheDaDat.findIndex(item => item.soGhe ===ghe.soGhe);
      if(index!==-1){
        this.mangGheDaDat.splice(index,1);
      }
    this.onCancel.emit(ghe.soGhe);
  }
}
