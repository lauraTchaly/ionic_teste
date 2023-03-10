import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeParceriasPage } from './lista-de-parcerias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeParceriasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeParceriasPage]
})
export class ListaDeParceriasPageModule {}
