import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.page.html',
  styleUrls: ['./ciencia.page.scss'],
})
export class CienciaPage implements OnInit {

  constructor(public router: Router, ) { }

  ngOnInit() {
  }

  Treino() {
    this.router.navigate(['/treino']);
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }
  Home() {
    this.router.navigate(['/instrucoes']);
  }

}
