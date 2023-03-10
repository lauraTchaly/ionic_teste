import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDePromocoesPage } from './lista-de-promocoes.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDePromocoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDePromocoesPage]
})
export class ListaDePromocoesPageModule {}
