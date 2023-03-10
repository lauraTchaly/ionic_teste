import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Finalizar } from '../model/finalizar';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.page.html',
  styleUrls: ['./finalizar-compra.page.scss'],
})
export class FinalizarCompraPage implements OnInit {



  finalizar: Finalizar = new Finalizar();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  formGroup: FormGroup; // <----


  constructor(public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public router: Router,
    public nav: NavController) {// <----
    this.id = this.activatedRoute.snapshot.paramMap.get('finalizar');
    console.log(this.id)
    this.form(); // <----
  }

  form() {// <----
    this.formGroup = this.formBuilder.group({
      nome: [this.finalizar.nome, [Validators.required, Validators.minLength(3)]],
      endereco: [this.finalizar.endereco, [Validators.required, Validators.minLength(5)]],
      bairro: [this.finalizar.bairro, [Validators.required, Validators.minLength(3)]],
      cidade: [this.finalizar.cidade, [Validators.required, Validators.minLength(2)]],
      cep: [this.finalizar.cep, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      cpf: [this.finalizar.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      telefone: [this.finalizar.telefone, [Validators.required, Validators.minLength(9)]],
      email: [this.finalizar.email, [Validators.email, Validators.required]],
      
      
    });
  }

  ngOnInit() {

  }



  Carrinho() {
    this.router.navigate(['/carrinho']);
  }

  subimtForm() {
    console.log(this.formGroup.value)

  
    let ref = this.firestore.collection('finalizar')
    ref.add(this.formGroup.value)
      .then(() => {
        console.log('Enviado com Sucesso');
        this.toast('Compra Feita com Sucesso');

        this.router.navigate(['/carrinho']);
      }).catch(() => {
        console.log('Erro ao enviar');
      })
  }

  async toast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();

  }

}



