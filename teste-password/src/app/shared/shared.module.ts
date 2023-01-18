import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputPasswordComponent,
    FormsModule
  ]
})
export class SharedModule { }
