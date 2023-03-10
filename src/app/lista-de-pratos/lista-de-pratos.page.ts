import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Prato } from '../model/prato'

import { Pedido } from '../model/pedido';
import { Item } from '../model/item';
import { ViewChild } from '@angular/core';
import { Modal } from '../model/modal';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-lista-de-pratos',
  templateUrl: './lista-de-pratos.page.html',
  styleUrls: ['./lista-de-pratos.page.scss'],
})
export class ListaDePratosPage implements OnInit {

  ListaDePratos: Prato[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  filtroBox = 'none'

  @ViewChild("textoBusca") textoBusca;

  slideOpts = {
    initialSlide: 2,
    speed: 400,
    loop: 'auto',
    autoplay: true
  };

  pedido: Pedido;


  constructor(public router: Router,
    public loadingController: LoadingController,
    public storageServ: StorageService) {

    this.pedido = this.storageServ.getCart();

  }

  ngOnInit() {
    this.getList();
    console.log(this.ListaDePratos);
  }

  addCarrinho(prato: Prato) {



    this.pedido = this.storageServ.getCart();
    let add = true;

    let i = new Item();
    i.prato = prato;
    i.prato.tipo = "Prato";
    
    i.quantidade = 1;

    if (this.pedido == null) {

      this.pedido = new Pedido();
      this.pedido.itens = [];

    } else {


      this.pedido.itens.forEach(p => {


        if (p.prato !== undefined) {


          if (p.prato.id == prato.id) {
            add = false;
          }
        }


      });

    }

    if (add == true) this.pedido.itens.push(i);

    this.storageServ.setCart(this.pedido);

  }

  busca() {
    this.ListaDePratos = [];
    var ref = firebase.firestore().collection("prato");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new Prato();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratos.push(p);

        });

        this.busca2();

      } else {
        this.ListaDePratos = [];
        // doc.data() will be undefined in this case
        console.log("No such document!");
        this.busca2();
        this.busca3();
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  busca2() {



    var ref = firebase.firestore().collection("pratovegano");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new Prato();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratos.push(p);

        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  busca3() {



    var ref = firebase.firestore().collection("pratovegetariano");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new Prato();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratos.push(p);

        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  viewPratoVegano() {
    this.router.navigate(['/lista-de-pratos-vegano']);
  }

  viewPratoVegetariano() {
    this.router.navigate(['/lista-de-pratos-vegetariano']);
  }
  Home() {
    this.router.navigate(['/list']);
  }

  Carrinho() {
    this.router.navigate(['/carrinho']);
  }

  ListaDePromocoes() {
    this.router.navigate(['/lista-de-promocoes']);
  }

  ListaDeParcerias() {
    this.router.navigate(['/lista-de-parcerias']);
  }
  viewPrato (prato: Prato){
    
    this.router.navigate(['/view-modal',{'prato':prato.id}]);
  }
  ViewPrato(prato: Prato) {
    this.router.navigate(['/prato-view', { 'prato': prato.id }]);
  }

  getList() {
    

    var ref = firebase.firestore().collection("prato");
    ref.get().then(query => {
      query.forEach(doc => {

        let c = new Prato();
        c.setDados(doc.data());
        c.id = doc.id;

     

        let ref = firebase.storage().ref().child(`pratos/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.imagem = url;

          this.ListaDePratos.push(c);
        })
          .catch(err => {
            this.ListaDePratos.push(c);
          })

      });
    });
  }


  remove(obj: Prato) {
    var ref = firebase.firestore().collection("prato");
    ref.doc(obj.id).delete()
      .then(() => {
        this.ListaDePratos = [];
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
  showFilter(){
    if(this.filtroBox=='none')
      this.filtroBox = 'block'
    else
      this.filtroBox = 'none'
  }
}

