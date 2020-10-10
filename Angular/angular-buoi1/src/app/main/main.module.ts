import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MovieDetailComponent } from '../interaction/movie-detail/movie-detail.component';
import { LayoutComponent } from './layout/layout.component';

const routes:Routes=[
  // khi sai children thi file layout cha phai gang router-outlet
  {path:'',component:LayoutComponent,children:[
    {path:'',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'movie-detail',component:MovieDetailComponent},
  ]},
]

@NgModule({
  declarations: [MainComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
