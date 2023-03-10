import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-cadastroperfil',
  templateUrl: './cadastroperfil.page.html',
  styleUrls: ['./cadastroperfil.page.scss'],
})
export class CadastroperfilPage implements OnInit {

  id;

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public router : Router,
              private firebaseauth : AngularFireAuth) {

    this.firebaseauth.authState.subscribe(obj=>{
        this.id = this.firebaseauth.auth.currentUser.uid;
        console.log(this.id);
        
    });

    this.formGroup = this.formBuilder.group({
      nome : [''],
      sobrenome : [''],
      telefone : [''],
      cel : [''],
      cidade : [''],
      
    })

    
  }

  ngOnInit() {
  }

  entrar(){
    let ref = this.firestore.collection('usuario').doc(this.id)
    ref.set(this.formGroup.value)
    .then(()=>{
      console.log('Entrada do Perfil com sucesso');
      this.router.navigate(['/perfil']);
    }).catch(err=>{
      console.log('Erro ao Cadastrar')
      console.log(err)
    })
  }



}
