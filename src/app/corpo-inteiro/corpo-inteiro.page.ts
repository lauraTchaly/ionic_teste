import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corpo-inteiro',
  templateUrl: './corpo-inteiro.page.html',
  styleUrls: ['./corpo-inteiro.page.scss'],
})
export class CorpoInteiroPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  TreinoCorpoInteiro() {
    this.router.navigate(['/treino-corpo-inteiro']);
  }

  VisualizarTreino() {
    this.router.navigate(['/visualizar-treino']);
  }

}
