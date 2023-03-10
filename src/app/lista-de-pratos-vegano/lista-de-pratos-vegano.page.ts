import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import { NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { PratoVegano } from '../model/pratovegano'
import { StorageService } from '../service/storage.service';
import { Pedido } from '../model/pedido';
import { Item } from '../model/item';
import { ViewChild } from '@angular/core';
import { Prato } from '../model/prato';



@Component({
  selector: 'app-lista-de-pratos-vegano',
  templateUrl: './lista-de-pratos-vegano.page.html',
  styleUrls: ['./lista-de-pratos-vegano.page.scss'],
})
export class ListaDePratosVeganoPage implements OnInit {

  ListaDePratosVegano: PratoVegano[] = [];
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
    console.log(this.ListaDePratosVegano);
  }

  addCarrinho(prato: Prato) {



    this.pedido = this.storageServ.getCart();
    let add = true;

    let i = new Item();
    i.prato = prato;
    i.prato.tipo = "Vegano";
    
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
    this.ListaDePratosVegano = [];
    var ref = firebase.firestore().collection("pratovegano");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new PratoVegano();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratosVegano.push(p);

        });

        this.busca2();

      } else {
        this.ListaDePratosVegano = [];
        // doc.data() will be undefined in this case
        console.log("No such document!");
        this.busca2();   
        this.busca3();
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }
  busca2() {
    

    
    var ref = firebase.firestore().collection("prato");
    //ref.orderBy('nome').startAfter(this.textoBusca.value).get().then(doc=> {
    ref.orderBy('nome').startAfter(this.textoBusca.value).endAt(this.textoBusca.value + '\uf8ff').get().then(doc => {

      if (doc.size > 0) {

        doc.forEach(doc => {

          let p = new PratoVegano();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratosVegano.push(p);

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

          let p = new PratoVegano();
          p.setDados(doc.data());
          p.id = doc.id;
          this.ListaDePratosVegano.push(p);

        });

      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })

    //this.router.navigate(['/Prato', { 'filtro': "busca" }]);
  }

  ListaDePratos() {
    this.router.navigate(['/lista-de-pratos-vegano']);
  }

  viewPratoVegetariano() {
    this.router.navigate(['/lista-de-pratos-vegetariano']);
  }
  PratoView() {
    this.router.navigate(['/lista-de-pratos']);
  }
  Home() {
    this.router.navigate(['/lista-de-pratos']);
  }
  Carrinho() {
    this.router.navigate(['/carrinho']);
  }
  ViewPratoVegano(pratovegano: PratoVegano) {
    this.router.navigate(['/view-prato-vegano', { 'pratovegano': pratovegano.id }]);

  }
  ListaDePromocoes() {
    this.router.navigate(['/lista-de-promocoes']);
  }
  ListaDeParcerias() {
    this.router.navigate(['/lista-de-parcerias']);
  }
  viewPratoVegano (pratovegano: PratoVegano){
    
    this.router.navigate(['/view-modal-vegano',{'pratovegano':pratovegano.id}]);
  }

  getList() {

    var ref = firebase.firestore().collection("pratovegano");
    ref.get().then(query => {
      query.forEach(doc => {

        let c = new PratoVegano();
        c.setDados(doc.data());
        c.id = doc.id;

        let ref = firebase.storage().ref().child(`pratos/${doc.id}.jpg`).getDownloadURL().then(url => {
          c.imagem = url;

          this.ListaDePratosVegano.push(c);
        })

          .catch(err => {
            this.ListaDePratosVegano.push(c);
          })
          console.log(this.ListaDePratosVegano)
      });
     
    });
  }


  remove(obj: PratoVegano) {
    var ref = firebase.firestore().collection("pratovegano");
    ref.doc(obj.id).delete()
      .then(() => {
        this.ListaDePratosVegano = [];
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




