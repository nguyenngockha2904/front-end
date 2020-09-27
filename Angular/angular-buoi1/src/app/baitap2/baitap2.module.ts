import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap2Component } from './baitap2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { ItemComponent } from './item/item.component';
import { IndexComponent } from './index/index.component';

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
  imports: [CommonModule],
  exports: [Baitap2Component],
})
export class Baitap2Module {}
