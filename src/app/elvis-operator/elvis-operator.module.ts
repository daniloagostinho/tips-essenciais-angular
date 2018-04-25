import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElvisOperatorComponent } from './elvis-operator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ElvisOperatorComponent],
  declarations: [ElvisOperatorComponent]
})
export class ElvisOperatorModule { }
