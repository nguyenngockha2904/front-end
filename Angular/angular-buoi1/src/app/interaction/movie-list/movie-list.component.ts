import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movieList: any[] = [
    {
      tenP: 'Giết hoặc bị giết',
      gia: 80000,
      hinhAnh: 'assets/images/phim1.png',
    },
    {
      tenP: 'Dị nhân bóng tối',
      gia: 80000,
      hinhAnh: 'assets/images/phim2.png',
    },
    {
      tenP: 'Toru gà tây mê quẩy',
      gia: 80000,
      hinhAnh: 'assets/images/phim3.png',
    },
    { tenP: 'Mượn xác', gia: 80000, hinhAnh: 'assets/images/phim4.png' },
    {
      tenP: 'Vì sao đưa bạn tới',
      gia: 80000,
      hinhAnh: 'assets/images/phim5.png',
    },
    {
      tenP: 'Bà tôi là công chúa',
      gia: 80000,
      hinhAnh: 'assets/images/phim6.png',
    },
    {
      tenP: 'Xứ sở phép thuật',
      gia: 80000,
      hinhAnh: 'assets/images/phim7.png',
    },
    {
      tenP: 'Trò chơi của quỷ',
      gia: 80000,
      hinhAnh: 'assets/images/phim8.png',
    },
    {
      tenP: 'Gia đình chân to',
      gia: 80000,
      hinhAnh: 'assets/images/phim9.png',
    },
  ];
  @Output() selectMovie = new EventEmitter();
  @ViewChildren(MovieItemComponent) movieItemComponent: QueryList<
    MovieItemComponent
  >;
  constructor() {}
  ngOnInit(): void {}

  viewDetail(movie: any): void {
    this.selectMovie.emit(movie);
    this.movieItemComponent.forEach((item: MovieItemComponent) => {
      console.log(item.movie);
    });
  }
}
