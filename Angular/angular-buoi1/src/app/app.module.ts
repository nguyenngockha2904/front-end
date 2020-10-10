import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Baitap1Module } from './baitap1/baitap1.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Baitap2Module } from './baitap2/baitap2.module';
import { Baitap4Component } from './baitap4/baitap4.component';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { Baitap5Module } from './baitap5/baitap5.module';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { InteractionModule } from './interaction/interaction.module';
import { Baitap8Module } from './baitap8/baitap8.module';
import {RouterModule,Routes} from '@angular/router';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap8Component } from './baitap8/baitap8.component';
import { Baitap2Component } from './baitap2/baitap2.component';
import { MainModule } from './main/main.module';
import { AdminModule } from './admin/admin.module';
// có nhìu loại module
// module do angular cung cấp : FormsModule ,RouterModule, HttpModule
// module do dev tự định nghĩa
const routes:Routes =[
  // {path:'baitap1',component:Baitap1Component},
  // {path:'baitap2',component:Baitap2Component},
  // {path:'baitap8',component:Baitap8Component},
  // khi dung router load module ko can phai khai bao module duoi phan imports
  {path:'baitap1',loadChildren:()=>Baitap1Module},
  {path:'baitap8',loadChildren:()=>Baitap8Module},
  {path:'baitap2',loadChildren:()=>Baitap2Module},
  {path:'admin',loadChildren:()=>import('./admin/admin.module').then(ad=>ad.AdminModule)},
  {path:'',loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},
]
@NgModule({
  declarations: [
    // nơi module khai báo các component mà nó quản lý
    AppComponent,
    DemoComponent,
    Baitap4Component,
  ],
  //nơi gắn module vào
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    // module abc 
    FormsModule,
    StructuralDirectivesModule,
    AttributeDirectiveModule,
    Baitap5Module,
    Baitap6Module,
    InteractionModule, 
  ],
  // nơi gắn các services vào
  providers: [],
  // khai báo để AppComponent là component chạy đầu tiên
  bootstrap: [AppComponent], //nơi khai báo component chính của module này
})
export class AppModule {}
