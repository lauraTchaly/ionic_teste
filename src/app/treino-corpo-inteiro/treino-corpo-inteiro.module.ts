import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TreinoCorpoInteiroPage } from './treino-corpo-inteiro.page';

const routes: Routes = [
  {
    path: '',
    component: TreinoCorpoInteiroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TreinoCorpoInteiroPage]
})
export class TreinoCorpoInteiroPageModule {}
