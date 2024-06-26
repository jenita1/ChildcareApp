import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildDetailsComponent } from './child-details/child-details.component';



@NgModule({
  declarations: [
    ChildDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChildDetailsComponent
  ]
})
export class ChildModule { }
