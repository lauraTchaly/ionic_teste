import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braco-treino-instrucao',
  templateUrl: './braco-treino-instrucao.page.html',
  styleUrls: ['./braco-treino-instrucao.page.scss'],
})
export class BracoTreinoInstrucaoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }

}
