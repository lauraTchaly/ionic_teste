import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gluteos-treino-instrucao',
  templateUrl: './gluteos-treino-instrucao.page.html',
  styleUrls: ['./gluteos-treino-instrucao.page.scss'],
})
export class GluteosTreinoInstrucaoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }

}
