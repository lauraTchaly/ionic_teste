import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbdomensTreinoInstrucaoPage } from './abdomens-treino-instrucao.page';

const routes: Routes = [
  {
    path: '',
    component: AbdomensTreinoInstrucaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbdomensTreinoInstrucaoPage]
})
export class AbdomensTreinoInstrucaoPageModule {}
