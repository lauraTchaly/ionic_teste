import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abdomens-treino',
  templateUrl: './abdomens-treino.page.html',
  styleUrls: ['./abdomens-treino.page.scss'],
})
export class AbdomensTreinoPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  Treino() {
    this.router.navigate(['/treino']);
  }

}
