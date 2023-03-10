import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDePratosVegetarianoPage } from './lista-de-pratos-vegetariano.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDePratosVegetarianoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDePratosVegetarianoPage]
})
export class ListaDePratosVegetarianoPageModule {}
