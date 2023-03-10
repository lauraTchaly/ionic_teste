import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PernaTreinoPage } from './perna-treino.page';

const routes: Routes = [
  {
    path: '',
    component: PernaTreinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PernaTreinoPage]
})
export class PernaTreinoPageModule {}
