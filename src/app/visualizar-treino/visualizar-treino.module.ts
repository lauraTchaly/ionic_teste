import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisualizarTreinoPage } from './visualizar-treino.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarTreinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisualizarTreinoPage]
})
export class VisualizarTreinoPageModule {}
