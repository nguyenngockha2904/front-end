import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  @Output() selectMovie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  viewDetail(): void {
    this.selectMovie.emit(this.movie); // kích hoạt sự kiện + với output sẽ đẩy sự kiên này lên comp Cha
  }
}
