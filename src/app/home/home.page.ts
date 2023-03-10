import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public router : Router,
              public navctrl : NavController,
              public fire : AngularFireAuth){
  }
// LOGANDO USUÁRIO
  logar(){
    this.fire.auth.signInWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=>{
        console.log('Logado com sucesso');
        this.router.navigate(['/list']);
      })
      .catch(()=>{
        console.log('Login Inválido');
      })
  }
//CADASTRANDO USUÁRIO
  cadastrar(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
    .then(()=> {
      console.log("Cadastrado com sucesso!");
      this.router.navigate(['cadastroperfil']);
    }).catch(()=>{
      console.log("Usuário inválido");
    })
  }



}
