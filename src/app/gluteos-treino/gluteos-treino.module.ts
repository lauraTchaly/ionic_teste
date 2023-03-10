import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GluteosTreinoPage } from './gluteos-treino.page';

const routes: Routes = [
  {
    path: '',
    component: GluteosTreinoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GluteosTreinoPage]
})
export class GluteosTreinoPageModule {}
