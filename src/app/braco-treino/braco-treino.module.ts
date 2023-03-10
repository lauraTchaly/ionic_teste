import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BracoTreinoPage } from './braco-treino.page';

const routes: Routes = [
  {
    path: '',
    component: BracoTreinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BracoTreinoPage]
})
export class BracoTreinoPageModule {}
