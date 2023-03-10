import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BracoTreinoInstrucaoPage } from './braco-treino-instrucao.page';

const routes: Routes = [
  {
    path: '',
    component: BracoTreinoInstrucaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BracoTreinoInstrucaoPage]
})
export class BracoTreinoInstrucaoPageModule {}
