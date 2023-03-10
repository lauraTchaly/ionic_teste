import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Modal } from '../model/modal';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { PratoVegano } from '../model/pratovegano';

@Component({
  selector: 'app-view-modal-vegano',
  templateUrl: './view-modal-vegano.page.html',
  styleUrls: ['./view-modal-vegano.page.scss'],
})
export class ViewModalVeganoPage implements OnInit {

  pratoID: any;
  pratovegano: PratoVegano = new PratoVegano();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;
  formGroup: FormGroup; // <----


  constructor(public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public nav: NavController) {// <----

    this.pratoID = this.activatedRoute.snapshot.paramMap.get('pratovegano');

    // <----
  }

  ngOnInit() {
   
   this.buscaID();
  }
 
  ListaDePratosVegano() {
    this.router.navigate(['/lista-de-pratos-vegano']);
  }
  Home() {
    this.router.navigate(['/lista-de-pratos-vegano']);
  }
  Carrinho() {
    this.router.navigate(['/carrinho']);
  }


  buscaID() {
    var ref = firebase.firestore().collection("pratovegano").doc(this.pratoID).get().then(doc => {

      if (doc.exists) {



        this.pratovegano.setDados(doc.data());
        this.pratovegano.id = doc.id;


        let ref = firebase.storage().ref().child(`pratos/${doc.id}.jpg`).getDownloadURL().then(url => {
          this.pratovegano.imagem = url;

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
      .child(`pratos/${this.id}.jpg`);

    ref.put(imagem).then(url => {
      console.log("Enviado com sucesso!");
   
    })

  }







}


