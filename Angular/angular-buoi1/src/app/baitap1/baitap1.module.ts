import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap1Component } from './baitap1.component';
import {Routes,RouterModule} from '@angular/router';
const routes:Routes=[
  {path:'',component:Baitap1Component}
]
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    Baitap1Component,
  ],
  imports: [CommonModule,RouterModule.forChild(routes),],
  // những module nào có import baitap1module thì có thể xử dụng các component này
  exports: [
    // HeaderComponent,
    // SidebarComponent,
    // ContentComponent,
    // FooterComponent,
    // Baitap1Component,
  ],
})
export class Baitap1Module {}
