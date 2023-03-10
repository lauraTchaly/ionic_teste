import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Usuario } from '../model/usuario';
import * as firebase from 'firebase';


@Component({
  selector: 'app-treino',
  templateUrl: './treino.page.html',
  styleUrls: ['./treino.page.scss'],
})
export class TreinoPage implements OnInit {

  id: string;
  Usuario: Usuario = new Usuario();
  picture: string = "../../assets/imagens/1.gif";

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  constructor(public router : Router, private firebaseauth : AngularFireAuth,) {
    this.firebaseauth.authState.subscribe(obj => {

      this.id = this.firebaseauth.auth.currentUser.uid;

      this.downloadFoto();

      let ref = this.firestore.collection('usuario').doc(this.id)
      ref.get().then(doc => {
        this.Usuario.setDados(doc.data());
        this.Usuario.id = doc.id;
      })
    });
   }

  ngOnInit() {
  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`usuario/${this.id}.jpg`);
  
    ref.getDownloadURL().then(url => {
      this.picture = url;
    })
  }

  Instrucoes() {
    this.router.navigate(['/instrucoes']);
  }

  Ciencia() {
    this.router.navigate(['/ciencia']);
  }

  TreinoCorpoInteiro() {
    this.router.navigate(['/treino-corpo-inteiro']);
  }

  AbdomensTreino() {
    this.router.navigate(['/abdomens-treino']);
  }

  BracoTreino() {
    this.router.navigate(['/braco-treino']);
  }

  PernaTreino() {
    this.router.navigate(['/perna-treino']);
  }

  GluteosTreino() {
    this.router.navigate(['/gluteos-treino']);
  }

  Imc() {
    this.router.navigate(['/imc']);
  }

  Perfil() {
    this.router.navigate(['/perfil']);
  }

  Home() {
    this.router.navigate(['/list']);
  }
}

