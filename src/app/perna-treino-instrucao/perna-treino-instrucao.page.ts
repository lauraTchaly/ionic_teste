import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perna-treino-instrucao',
  templateUrl: './perna-treino-instrucao.page.html',
  styleUrls: ['./perna-treino-instrucao.page.scss'],
})
export class PernaTreinoInstrucaoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }


}
