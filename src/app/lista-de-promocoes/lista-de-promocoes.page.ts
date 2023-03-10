import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Promocao } from '../model/promocao'
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';

import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-de-promocoes',
  templateUrl: './lista-de-promocoes.page.html',
  styleUrls: ['./lista-de-promocoes.page.scss'],
})
export class ListaDePromocoesPage implements OnInit {

  ListaDePromocoes: Promocao[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  pedido: Pedido;


  constructor(public router: Router,
    public loadingController: LoadingController,
    public storageServ: StorageService) {

    this.pedido = this.storageServ.getCart();

  }

  ngOnInit() {
    this.getList();
    console.log(this.ListaDePromocoes);
  }

 
  ListaDePratos() {
    this.router.navigate(['/lista-de-pratos']);
  }

  ViewPromocao(promocao: Promocao) {
    this.router.navigate(['/view-promocao', { 'promocao': promocao.id }]);

  }
  Carrinho(){
    this.router.navigate(['/carrinho']);

  }
  viewPrato (promocao: Promocao){
    
    this.router.navigate(['/view-modal-promocoes',{'promocao':promocao.id}]);
  }



  getList() {

    var ref = firebase.firestore().collection("promocao");
    ref.get().then(query => {
      query.forEach(doc => {

        let c = new Promocao();
        c.setDados(doc.data());
        c.id = doc.id;

        let ref = firebase.storage().ref().child(`promo/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.imagem = url;

          this.ListaDePromocoes.push(c);
        })

          .catch(err => {
            this.ListaDePromocoes.push(c);
          })

      });
    });
  }


  remove(obj: Promocao) {
    var ref = firebase.firestore().collection("promocao");
    ref.doc(obj.id).delete()
      .then(() => {
        this.ListaDePromocoes = [];
        this.getList();
      }).catch(() => {
        console.log('Erro ao atualizar');
      })
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Hellooo',
      duration: 2000
    });
    await loading.present();


  }




}