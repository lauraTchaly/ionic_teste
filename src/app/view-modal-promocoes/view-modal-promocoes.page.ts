import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Modal } from '../model/modal';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Promocao } from '../model/promocao';


@Component({
  selector: 'app-view-modal-promocoes',
  templateUrl: './view-modal-promocoes.page.html',
  styleUrls: ['./view-modal-promocoes.page.scss'],
})
export class ViewModalPromocoesPage implements OnInit {

  pratoID: any;
  promocao: Promocao = new Promocao();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;
  formGroup: FormGroup; // <----


  constructor(public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public nav: NavController) {// <----

    this.pratoID = this.activatedRoute.snapshot.paramMap.get('promocao');

    // <----
  }



  ngOnInit() {

    this.buscaID();
  }

  ListaDePromocoes() {
    this.router.navigate(['/lista-de-promocoes']);
  }
  Home() {
    this.router.navigate(['/lista-de-promocoes']);
  }
  Carrinho() {
    this.router.navigate(['/carrinho']);
  }


  buscaID() {
    var ref = firebase.firestore().collection("promocao").doc(this.pratoID).get().then(doc => {

      if (doc.exists) {



        this.promocao.setDados(doc.data());
        this.promocao.id = doc.id;


        let ref = firebase.storage().ref().child(`promo/${doc.id}.jpg`).getDownloadURL().then(url => {
          this.promocao.imagem = url;

        })
          .catch(err => {

          })


      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
  }



  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`promo/${this.id}.jpg`);

    ref.put(imagem).then(url => {
      console.log("Enviado com sucesso!");

    })

  }







}

