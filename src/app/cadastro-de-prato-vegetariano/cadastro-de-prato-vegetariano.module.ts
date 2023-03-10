import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDePratoVegetarianoPage } from './cadastro-de-prato-vegetariano.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDePratoVegetarianoPage
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
  declarations: [CadastroDePratoVegetarianoPage]
})
export class CadastroDePratoVegetarianoPageModule {}
