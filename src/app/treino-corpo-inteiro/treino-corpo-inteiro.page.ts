import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treino-corpo-inteiro',
  templateUrl: './treino-corpo-inteiro.page.html',
  styleUrls: ['./treino-corpo-inteiro.page.scss'],
})
export class TreinoCorpoInteiroPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Treino() {
    this.router.navigate(['/treino']);
  }

  CorpoInteiro() {
    this.router.navigate(['/corpo-inteiro']);
  }

}
