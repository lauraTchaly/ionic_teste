import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gluteos-treino',
  templateUrl: './gluteos-treino.page.html',
  styleUrls: ['./gluteos-treino.page.scss'],
})
export class GluteosTreinoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  Treino() {
    this.router.navigate(['/treino']);
  }

}
