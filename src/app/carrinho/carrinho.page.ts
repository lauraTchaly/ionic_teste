import { Component, OnInit } from '@angular/core';
import { Prato } from '../model/prato';
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';
import { Router } from '@angular/router';
import { PratoVegano } from '../model/pratovegano';
import { PratoVegetariano } from '../model/pratovegetariano';

import { Modal } from '../model/modal';
import * as firebase from 'firebase';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
})
export class CarrinhoPage implements OnInit {

  pedido: Pedido = new Pedido();
  total : number = 0;
  
  constructor(public storageServ: StorageService,
    public router: Router) {

    this.pedido = storageServ.getCart();
    console.log(this.pedido);
  }

  ngOnInit() {
    this.pedido.itens.forEach(item=>{

      firebase.storage().ref().child(`pratos/${item.prato.id}.jpg`).getDownloadURL().then(url => {
        item.prato.imagem = url;
      })

      

      this.total += parseFloat(item.prato.valor);

    })

    console.log(this.pedido);
  }
  
 
  removeCar(prato: Prato) {
    this.storageServ.setRemoveCart(prato);
    this.pedido = this.storageServ.getCart();

  }
  removeCarVegano(pratovegano: PratoVegano) {
    this.storageServ.setRemoveCartVegano(pratovegano);
    this.pedido = this.storageServ.getCart();

  }
  removeCarVegetariano(pratovegetariano: PratoVegetariano) {
    this.storageServ.setRemoveCartVegetariano(pratovegetariano);
    this.pedido = this.storageServ.getCart();

  }
 

  FinalizarCompra() {
    this.router.navigate(['/finalizar-compra']);
  }


  Home() {
    this.router.navigate(['/lista-de-pratos']);
  }


  ListaDeParcerias() {
    this.router.navigate(['/lista-de-parcerias']);
  }

  ListaDePratos() {
    this.router.navigate(['/lista-de-pratos']);
  }
  viewPrato(prato: Prato) {
    
    this.router.navigate(['/view-modal', { 'prato': prato.id }]);
  }

 
 
  ViewPratoVegano(pratovegano: PratoVegano) {
    
    this.router.navigate(['/view-modal-vegano', { 'pratovegano': pratovegano.id }]);


}

ViewPratoVegetariano(pratovegetariano: PratoVegetariano) {
    
  this.router.navigate(['/view-modal-vegetariano', { 'pratovegetariano': pratovegetariano.id }]);

}

}