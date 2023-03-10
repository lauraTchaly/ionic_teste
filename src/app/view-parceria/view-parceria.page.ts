import { Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { Parceria } from '../model/parceria';

import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-parceria',
  templateUrl: './view-parceria.page.html',
  styleUrls: ['./view-parceria.page.scss'],
})
export class ViewParceriaPage implements OnInit {

  parceria: Parceria = new Parceria();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;
  formGroup: FormGroup; // <----


  constructor(public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public nav: NavController) {// <----
    this.id = this.activatedRoute.snapshot.paramMap.get('parceria');
    console.log(this.id)
    this.form(); // <----
  }

  form() {// <----
    this.formGroup = this.formBuilder.group({
      nome: [this.parceria.nome],
      descricao: [this.parceria.descricao],
      endereco: [this.parceria.endereco],
      valor: [this.parceria.valor],
    });
  }

  ngOnInit() {
    this.downloadFoto();
    this.obterParceria();
  }

  obterParceria() {
    var ref = firebase.firestore().collection("parceria").doc(this.id);

    ref.get().then(doc => {
      this.parceria.setDados(doc.data());
      this.form();

    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  }

  atualizar() {
    let ref = this.firestore.collection('parceria')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() => {
        console.log('Atualizado com sucesso');
        this.nav.navigateRoot('/lista-de-parcerias');
      }).catch(() => {
        console.log('Erro ao Atualizar');
      })
  }

  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`parca/${this.id}.jpg`);

    ref.put(imagem).then(url => {
      console.log("Enviado com sucesso!");
      this.downloadFoto();
    })

  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`parca/${this.parceria.id}.jpg`);

    ref.getDownloadURL().then(url => {
      this.imagem = url;
    })
  }





}

