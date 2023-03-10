import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDePratoVeganoPage } from './cadastro-de-prato-vegano.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDePratoVeganoPage
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
  declarations: [CadastroDePratoVeganoPage]
})
export class CadastroDePratoVeganoPageModule {}
