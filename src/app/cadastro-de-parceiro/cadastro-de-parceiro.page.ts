import { Component, OnInit } from '@angular/core';


import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-de-parceiro',
  templateUrl: './cadastro-de-parceiro.page.html',
  styleUrls: ['./cadastro-de-parceiro.page.scss'],
})
export class CadastroDeParceiroPage implements OnInit {

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {

    this.formGroup = this.formBuilder.group({
      nome: [''],
      descricao: [''],
      endereco: [''],
      valor: [''],
    });

  }

  ngOnInit() {

  }

  cadastrar() {
    console.log('ok');
    let ref = this.firestore.collection('parceria')
    ref.add(this.formGroup.value)
      .then(() => {
        console.log('Cadastrado com sucesso');
        this.router.navigate(['/list']);
      }).catch(err => {
        console.log(err);
        console.log('Erro ao cadastrar');
      })
  }

}
