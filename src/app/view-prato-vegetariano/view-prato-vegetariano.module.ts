import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewPratoVegetarianoPage } from './view-prato-vegetariano.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPratoVegetarianoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewPratoVegetarianoPage]
})
export class ViewPratoVegetarianoPageModule {}
