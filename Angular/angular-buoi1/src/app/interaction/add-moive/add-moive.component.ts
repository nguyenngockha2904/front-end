import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-moive',
  templateUrl: './add-moive.component.html',
  styleUrls: ['./add-moive.component.scss'],
})
export class AddMoiveComponent implements OnInit {
  @Output() addMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  handleAddnew(tp: any, gia: any, hinhAnh: any): void {
    type Movie = {
      tenP: string;
      gia: string;
      hinhAnh: string;
    };
    let movie: Movie = {
      tenP: tp.value,
      gia: gia.value,
      hinhAnh: hinhAnh.value,
    };

    this.addMovie.emit(movie);
  }
}
