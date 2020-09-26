import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // nơi module khai báo các component mà nó quản lý
    AppComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent], //nơi khai báo component chính của module này
})
export class AppModule {}
