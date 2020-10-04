import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AddMoiveComponent } from './add-moive/add-moive.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [InteractionComponent, MovieListComponent, MovieItemComponent, AddMoiveComponent, MovieDetailComponent],
  imports: [CommonModule],
  exports: [InteractionComponent],
})
export class InteractionModule {}
