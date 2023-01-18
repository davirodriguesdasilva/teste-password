import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { FormsModule } from '@angular/forms';
import { InputPasswordDirective } from './directive/input-password.directive';


@NgModule({
  declarations: [
    InputPasswordComponent,
    InputPasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputPasswordComponent,
    InputPasswordDirective,
    FormsModule
  ]
})
export class SharedModule { }
