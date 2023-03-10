import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Promocao } from '../model/promocao';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-promocao',
  templateUrl: './view-promocao.page.html',
  styleUrls: ['./view-promocao.page.scss'],
})
export class ViewPromocaoPage implements OnInit {

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
    this.id = this.activatedRoute.snapshot.paramMap.get('promocao');
    console.log(this.id)
    this.form(); // <----
  }

  form() {// <----
    this.formGroup = this.formBuilder.group({
      nome: [this.promocao.nome],
      descricao: [this.promocao.descricao],
      ingrediente: [this.promocao.ingrediente],
      valor: [this.promocao.valor],
    });
  }

  ngOnInit() {
    this.downloadFoto();
    this.obterPromocao();
  }

  obterPromocao() {
    var ref = firebase.firestore().collection("promocao").doc(this.id);

    ref.get().then(doc => {
      this.promocao.setDados(doc.data());
      this.form();

    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  }

  atualizar() {
    let ref = this.firestore.collection('promocao')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() => {
        console.log('Atualizado com sucesso');
        this.nav.navigateRoot('/lista-de-promocoes');
      }).catch(() => {
        console.log('Erro ao Atualizar');
      })
  }

  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`promo/${this.id}.jpg`);

    ref.put(imagem).then(url => {
      console.log("Enviado com sucesso!");
      this.downloadFoto();
    })

  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`promo/${this.promocao.id}.jpg`);

    ref.getDownloadURL().then(url => {
      this.imagem = url;
    })
  }





}

