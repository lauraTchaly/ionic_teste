import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams, NavController } from '@ionic/angular';

import { ChatNutriPage } from './chat-nutri.page';
import { ViewChild } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { User } from 'firebase';
import { forkJoin } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ChatNutriPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ChatNutriPage]
})
export class ChatNutriPageModule {}
