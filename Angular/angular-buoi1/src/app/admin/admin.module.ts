import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';
import {RouterModule,Routes} from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { UsersComponent } from './users/users.component';
const routes:Routes=[
  {path:'',
  component:LayoutsComponent,
  children:[
    {path:'',pathMatch:'full',redirectTo:'users'},
    {path:'movies',component:MoviesComponent},
    {path:'users',component:UsersComponent}
  ]
  
}
]


@NgModule({
  declarations: [LayoutsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminModule { }
