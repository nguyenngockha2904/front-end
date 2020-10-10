
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ge',
  templateUrl: './ge.component.html',
  styleUrls: ['./ge.component.scss']
})
export class GeComponent implements OnInit {
  @Input() ghe:any;
  @Output() onSelect =new EventEmitter();
  isActived:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  datghe():void{
    this.isActived=!this.isActived;
    this.onSelect.emit({...this.ghe,isActived:this.isActived});
  }
}
