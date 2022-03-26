import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DahsboardPageComponent } from './dashboard.page';
import {
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: DahsboardPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    // AppProductComponentModule,
  ],

  declarations: [DahsboardPageComponent],
  providers: [FormGroupDirective],
})
export class DahsboardPagesModule {}
