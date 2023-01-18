import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './components/input-password/input-password.component';



@NgModule({
  declarations: [
    InputPasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputPasswordComponent
  ]
})
export class SharedModule { }
