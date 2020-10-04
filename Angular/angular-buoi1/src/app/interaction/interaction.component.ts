import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss'],
})
export class InteractionComponent implements OnInit {
  @ViewChild(MovieListComponent) movieListComponent: MovieListComponent;
  constructor() {}
  @ViewChild(MovieDetailComponent) movieDetail: MovieDetailComponent;
  ngOnInit(): void {}
  handleAddMovie({ tenP, gia, hinhAnh }): void {
    type Movie = {
      tenP: string;
      gia: string;
      hinhAnh: string;
    };
    let movie: Movie = {
      tenP: tenP,
      gia: gia,
      hinhAnh: hinhAnh,
    };
    this.movieListComponent.movieList.push(movie);
  }
  handleSelectMovie(moive: any): void {
    this.movieDetail.movieDetail = moive;
  }
}
