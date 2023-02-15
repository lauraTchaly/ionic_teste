import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/dataBase/database.service';
import { UtilityService } from 'src/app/dataBase/Utility.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  constructor(
    private database: DatabaseService,
    private alertctrl: AlertController,

    // Serviços de interação com o usuário
    private utilidades: UtilityService
  ) { }

  ngOnInit() {}

  // Método do alertando
  async alertando(){

    const alert = this.alertctrl.create({

      mode: "ios",
      header:"Cadastro de Produto",
      inputs:[
        {
          name:"produto",
          type:"text",
          placeholder:"Informe o produto"
        },
        {
          name:"cat",
          type:"text",
          placeholder:"Informe a Categoria"
        },
        {
          name:"qtr",
          type:"number",
          placeholder:"Informe a Quantidade"
        }
      ]
    })
  }

}
