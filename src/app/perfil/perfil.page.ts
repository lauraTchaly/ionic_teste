import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Usuario } from '../model/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuarioEmail: string;
  id: string;
  Usuario: Usuario = new Usuario();
  picture: string = "../../assets/imagens/1.gif";

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true }


  constructor(public activatedRoute: ActivatedRoute,
    public firebaseauth: AngularFireAuth,
    public router: Router,
    public fire: AngularFireAuth) {

    this.id = this.activatedRoute.snapshot.paramMap.get('usuario');

    this.firebaseauth.authState.subscribe(obj => {

      this.id = this.firebaseauth.auth.currentUser.uid;
      this.usuarioEmail = this.firebaseauth.auth.currentUser.email;

      this.downloadFoto();

      let ref = this.firestore.collection('usuario').doc(this.id)
      ref.get().then(doc => {
        this.Usuario.setDados(doc.data());
        this.Usuario.id = doc.id;
        console.log(this.Usuario);

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
//FUNÇÃO PARA DESLOGAR PERFIL
  deslogar() {
    this.fire.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    }).catch(() => {
      this.router.navigate(['/list']);
    })
  }

  edt() {
    this.router.navigate(['perfil-view']);
  }

  Home() {
    this.router.navigate(['/list']);
  }

}