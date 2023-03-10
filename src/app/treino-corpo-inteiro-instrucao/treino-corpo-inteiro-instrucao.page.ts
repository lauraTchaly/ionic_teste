import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treino-corpo-inteiro-instrucao',
  templateUrl: './treino-corpo-inteiro-instrucao.page.html',
  styleUrls: ['./treino-corpo-inteiro-instrucao.page.scss'],
})
export class TreinoCorpoInteiroInstrucaoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }


}
