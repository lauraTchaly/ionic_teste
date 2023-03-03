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
  private utilidades: UtilityService

  ) {}

  
  listaProdutos: Produto[] = [];

  // CARREGAR O MÉTODO DO INÍCIO DA PÁGINA

  ngOnInit(){

    this.utilidades.carregando("Aguarde...", 2000);
    this.DataBase.getItem().subscribe(results => this.listaProdutos = results)
    
  }

  // MÉTODO DO BOTÃO EXCLUIR
  deletar(id: number){
     try{

       this.DataBase.delItem(id);
     }catch(err){

       console.log(err);
     }finally{

        // CASO NÃO OCORRA NENHUM ERRO
        // O ITEM SERÁ EXCLUIDO E APARECERÁ
        // A MENSAGEM PARA O USUÁRIO
      this.utilidades.tostando("Item Excluido","bottom", 2000, "danger")
     
  }

}

// MÉTODO DO actionSheet
async actionMetod(item: Produto){
   const action = this.actionSheet.create({

      mode: 'ios',
      header: 'Selecione uma opção',
      buttons: [

        {

          text: item.status ? 'Desmarcar':'Marcar',
          icon: item.status ? 'radio-button-off': 'checkmark-circle',

          handler:() => {

            item.status = !item.status;
            this.DataBase.statusItem(item);
          }

        },

          {

             text: 'Cancelar',
             handler: () => {
               this.utilidades.tostando('Ação cancelada', "middle", 2000, 'secondary');


             }

          }
      ]

   }); (await action).present();

      setTimeout(this.refresh, 2000);

 }

//MÉTODO DO RELOAD
refresh(){
   location.reload();
 }
}
