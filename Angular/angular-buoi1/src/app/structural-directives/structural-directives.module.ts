import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [StructuralDirectivesComponent, CardComponent],
  imports: [CommonModule, FormsModule],
  exports: [StructuralDirectivesComponent],
})
export class StructuralDirectivesModule {}
