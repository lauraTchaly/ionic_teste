import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/dataBase/database.service';
import { UtilityService } from 'src/app/dataBase/Utility.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
     //Nosso serviço de banco de dados
     private DataBase: DatabaseService,
     //alertController - Ferramente que cria um alert
     private alertCtrl: AlertController,
      //Serviço de utilidades 
    private utilidades: UtilityService   
  ) { }

  ngOnInit() {}


  //Método do alertando 
  async alertando(){
    const alert = this.alertCtrl.create({
      mode:'ios',
      header: 'Cadastro de Produtos',
      inputs:[
        {
          name: 'item',
          type: 'text',
          placeholder: 'Informe o Produto'
        },
        {
          name:'qtd',
          type: 'text',
          placeholder: 'Informe a Quantidade'
        }
      ],
      buttons: [

        //Botão de cancelar
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.utilidades.tostando('Cancelado!', "middle",2000 ,"secondary" );
          }
        },

        //Botão de cadastrar
        {
          text: 'Cadastrar',
          handler: (form) => {
            //Objeto que irá forma nosso item da lista
            let item = {
              produto: form.item,
              quantidade: form.qtd, 

              //Vai ser a variavel de controle do ngIf
              status: false     
            };
            try{
              this.DataBase.postItem(item);
            }catch(err){
              console.log(err)
            }finally{
              this.utilidades.tostando("Item Cadastrado", "top", 2000,"success");                           
            } 
          }
        }
      ]
    });

    (await alert).present();
  }

}