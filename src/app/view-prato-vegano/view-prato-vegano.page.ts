import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PratoVegano } from '../model/pratovegano';

import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-view-prato-vegano',
  templateUrl: './view-prato-vegano.page.html',
  styleUrls: ['./view-prato-vegano.page.scss'],
})
export class ViewPratoVeganoPage implements OnInit {

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
    this.id = this.activatedRoute.snapshot.paramMap.get('pratovegano');
    console.log(this.id)
    this.form(); // <----
  }

  form() {// <----
    this.formGroup = this.formBuilder.group({
      nome: [this.pratovegano.nome],
      descricao: [this.pratovegano.descricao],
      ingrediente: [this.pratovegano.ingrediente],
      valor: [this.pratovegano.valor],
    });
  }

  ngOnInit() {
    this.downloadFoto();
    this.obterPratoVegano();
  }

  obterPratoVegano() {
    var ref = firebase.firestore().collection("pratovegano").doc(this.id);

    ref.get().then(doc => {
      this.pratovegano.setDados(doc.data());
      this.form();

    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  }

  atualizar() {
    let ref = this.firestore.collection('pratovegano')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() => {
        console.log('Atualizado com sucesso');
        this.nav.navigateRoot('/lista-de-pratos-vegano');
      }).catch(() => {
        console.log('Erro ao Atualizar');
      })
  }

  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`pratos/${this.id}.jpg`);

    ref.put(imagem).then(url => {
      console.log("Enviado com sucesso!");
      this.downloadFoto();
    })

  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`pratos/${this.pratovegano.id}.jpg`);

    ref.getDownloadURL().then(url => {
      this.imagem = url;
    })
  }





}



