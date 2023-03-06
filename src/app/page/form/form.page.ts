import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { DatabaseService } from 'src/app/dataBase/database.service';
import { UtilityService } from 'src/app/dataBase/Utility.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor(   
    
    private activateRouter: ActivatedRoute,
    private router: Router,
    private banco: DatabaseService,
    private util: UtilityService

    ) { 
  }
  routeId = null; //Variável que guarda a rota
  produto: any = {};

  ngOnInit() {
  this.routeId =
  this.activateRouter.snapshot.params['id'];

  if(this.routeId){
    // Se o id do produto for encontrado
    // Ativa o banco de dados

     this.banco.getOneItem(this.routeId).subscribe(caixa => {this.produto = caixa});

  }}

   update(form: any){

     this.banco.UpdateItem(this.routeId, form);
     this.router.navigate;
     this.util.tostando("Item Atualizado com sucesso","middle", 2000, "medium");

  }


  }


