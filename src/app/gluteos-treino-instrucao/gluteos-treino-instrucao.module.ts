import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GluteosTreinoInstrucaoPage } from './gluteos-treino-instrucao.page';

const routes: Routes = [
  {
    path: '',
    component: GluteosTreinoInstrucaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GluteosTreinoInstrucaoPage]
})
export class GluteosTreinoInstrucaoPageModule {}
