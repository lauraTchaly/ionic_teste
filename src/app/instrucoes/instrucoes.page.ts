import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.page.html',
  styleUrls: ['./instrucoes.page.scss'],
})
export class InstrucoesPage implements OnInit {

  constructor(public router : Router,) { }

  ngOnInit() {
  }

  Treino() {
    this.router.navigate(['/treino']);
  }

  Ciencia() {
    this.router.navigate(['/ciencia']);
  }

  TreinoCorpoInteiroInstrucao() {
    this.router.navigate(['/treino-corpo-inteiro-instrucao']);
  }

  AbdomensTreinoInstrucao() {
    this.router.navigate(['/abdomens-treino-instrucao']);
  }

  PernaTreinoInstrucao() {
    this.router.navigate(['/perna-treino-instrucao']);
  }
  GluteosTreinoInstrucao() {
    this.router.navigate(['/gluteos-treino-instrucao']);
  }
  BracoTreinoInstrucao() {
    this.router.navigate(['/braco-treino-instrucao']);
  }


}
