import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-treino',
  templateUrl: './visualizar-treino.page.html',
  styleUrls: ['./visualizar-treino.page.scss'],
})
export class VisualizarTreinoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  CorpoInteiro() {
    this.router.navigate(['/corpo-inteiro']);
  }

}
