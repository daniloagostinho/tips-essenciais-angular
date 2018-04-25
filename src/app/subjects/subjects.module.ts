import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SubjectsComponent],
  declarations: [SubjectsComponent]
})
export class SubjectsModule { }
