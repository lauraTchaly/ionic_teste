import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Produto } from '../model/produto';
import { DatabaseService } from '../dataBase/database.service';
import { UtilityService } from '../dataBase/Utility.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(

    // NOSSO OBJETO PARA OS SERVIÇOS DO BANCO DE DADOS 
  private DataBase: DatabaseService,

  // OBJETO PARA MANIPULAR OS MÉTODOS CLASSE IONIC
  private actionSheet: ActionSheetController,

  // OBJETO PARA MANIPULAR OS SERVIÇOS DA CLASSE SERVIÇOS
  private utilidade: UtilityService

  ) {}

  
  listaProdutos: Produto[] = [];

  // CARREGAR O MÉTODO DO INÍCIO DA PÁGINA

  ngOnInit(): {
    
  }




}
