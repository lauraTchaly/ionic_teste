import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeNutricionistasPage } from './lista-de-nutricionistas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeNutricionistasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeNutricionistasPage]
})
export class ListaDeNutricionistasPageModule {}
