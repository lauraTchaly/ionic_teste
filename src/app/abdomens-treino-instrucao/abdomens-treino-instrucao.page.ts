import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abdomens-treino-instrucao',
  templateUrl: './abdomens-treino-instrucao.page.html',
  styleUrls: ['./abdomens-treino-instrucao.page.scss'],
})
export class AbdomensTreinoInstrucaoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }


}
