import { Component, OnInit } from '@angular/core';

import { CalculosDirective } from '../../directives/calculos/calculos';
import { NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { DirectivesModule } from '../../directives/directives.module';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.page.html',
  styleUrls: ['./imc.page.scss'],
})
export class ImcPage {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  condicao: string = "";

  constructor( public navCtrl: NavController ,
    public loadingController: LoadingController,
          public router : Router ) { }

  calcular(){

    this.imc = CalculosDirective.calcularImc( this.altura, this.peso, );
    this.condicao = CalculosDirective.informarImc(this.imc);
    
  }

  ngOnInit() {
  }
 

  Treino() {
    this.router.navigate(['/treino']);
  }

}
  
  


