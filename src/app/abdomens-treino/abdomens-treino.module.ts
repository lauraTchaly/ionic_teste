import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AbdomensTreinoPage } from './abdomens-treino.page';

const routes: Routes = [
  {
    path: '',
    component: AbdomensTreinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AbdomensTreinoPage]
})
export class AbdomensTreinoPageModule {}
