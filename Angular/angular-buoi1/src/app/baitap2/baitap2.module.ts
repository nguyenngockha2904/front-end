import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { ItemComponent } from './item/item.component';
import { IndexComponent } from './index/index.component';
import {RouterModule,Routes} from '@angular/router';
const routes:Routes=[
  {path:'',component:Baitap2Component}
]
@NgModule({
  declarations: [
    Baitap2Component,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    IndexcontentComponent,
    ItemComponent,
    IndexComponent,
  ],
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [ ],
})
export class Baitap2Module {}
