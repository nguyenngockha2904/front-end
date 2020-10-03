import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isShowing: boolean = true;
  isLoggedIn: boolean = false;
  color: string = 'blue';
  constructor() {}
  dssv: any = [
    { hoTen: 'Kha', lop: 'FE47' },
    { hoTen: 'Thich', lop: 'FE47' },
    { hoTen: 'Mai', lop: 'FE47' },
    { hoTen: 'A', lop: 'FE47' },
    { hoTen: 'Chung', lop: 'FE47' },
    { hoTen: 'Minh', lop: 'FE47' },
  ];
  ngOnInit(): void {}
  handleShow(): void {
    this.isShowing = !this.isShowing;
  }
}
