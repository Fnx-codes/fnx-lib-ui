import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ButtonComponent } from './components/atoms/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [CommonModule, AngularMaterialModule],
})
export class FnxUiModule {}
