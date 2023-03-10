import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-braco-treino',
  templateUrl: './braco-treino.page.html',
  styleUrls: ['./braco-treino.page.scss'],
})
export class BracoTreinoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  Treino() {
    this.router.navigate(['/treino']);
  }

}
