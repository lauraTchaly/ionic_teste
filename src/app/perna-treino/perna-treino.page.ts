import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perna-treino',
  templateUrl: './perna-treino.page.html',
  styleUrls: ['./perna-treino.page.scss'],
})
export class PernaTreinoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  Treino() {
    this.router.navigate(['/treino']);
  }
}
