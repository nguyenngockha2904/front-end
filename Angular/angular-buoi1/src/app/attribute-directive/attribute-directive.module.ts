import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { HightlightDirective } from './hightlight.directive';

@NgModule({
  declarations: [AttributeDirectiveComponent, HightlightDirective],
  imports: [CommonModule],
  exports: [AttributeDirectiveComponent],
})
export class AttributeDirectiveModule {}
