import { Component, OnInit, ViewChild } from '@angular/core';

import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro-de-prato-vegetariano',
  templateUrl: './cadastro-de-prato-vegetariano.page.html',
  styleUrls: ['./cadastro-de-prato-vegetariano.page.scss'],
})
export class CadastroDePratoVegetarianoPage implements OnInit {

  @ViewChild("enviaFoto") enviaFoto;
 
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  formGroup: FormGroup;

  idFoto: string = "";

  imagem: string = "";

  foto: string = "";

  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public toastController: ToastController, ) {
     
    this.formGroup = this.formBuilder.group({
      nome : [''],
      descricao : [''],
      ingrediente : [''],
      valor : [''],
    });
    
   }

  ngOnInit() {
    
  }

 
  cadastrar() {
    console.log('ok');
    let ref = this.firestore.collection('pratovegetariano')
    ref.add(this.formGroup.value)
      .then(resp => {
        console.log('Cadastrado com sucesso');
        this.toast('Produto Cadastrado com sucesso');

        this.idFoto = resp.id;

        if (this.idFoto = resp.id) {
          let ref = firebase.storage().ref()
            .child(`pratos/${this.idFoto}.jpg`);
          ref.put(this.imagem).then(url => {
            console.log('Enviado com Sucesso')
            this.router.navigate(['/list']);

          })

        }
      }).catch(err => {
        console.log(err);
        console.log('Erro ao cadastrar');
      })
  }
  pegarImagem(event) {
    this.imagem = event.srcElement.files[0];
    console.log(this.imagem);
    if (this.imagem == event.srcElement.files[0]) {
      this.foto = this.imagem;
    }


  }

  async toast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }
}
