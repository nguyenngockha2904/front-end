import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Baitap1Module } from './baitap1/baitap1.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Baitap2Module } from './baitap2/baitap2.module';
import { Baitap4Component } from './baitap4/baitap4.component';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
// có nhìu loại module
// module do angular cung cấp : FormsModule ,RouterModule, HttpModule
// module do dev tự định nghĩa
@NgModule({
  declarations: [
    // nơi module khai báo các component mà nó quản lý
    AppComponent,
    DemoComponent,
    Baitap4Component,
  ],
  //nơi gắn module vào
  imports: [
    BrowserModule,
    // module abc
    Baitap1Module,
    Baitap2Module,
    FormsModule,
    StructuralDirectivesModule,
    AttributeDirectiveModule,
  ],
  // nơi gắn các services vào
  providers: [],
  // khai báo để AppComponent là component chạy đầu tiên
  bootstrap: [AppComponent], //nơi khai báo component chính của module này
})
export class AppModule {}