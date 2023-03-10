import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TreinoCorpoInteiroInstrucaoPage } from './treino-corpo-inteiro-instrucao.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoCorpoInteiroInstrucaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TreinoCorpoInteiroInstrucaoPage]
})
export class TreinoCorpoInteiroInstrucaoPageModule {}
