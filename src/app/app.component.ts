import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  usuarioEmail: string;
  id: string;
  Usuario: Usuario = new Usuario();
  picture: string = "../../assets/imagens/1.gif";

  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true }

  public appPages = [
    {
      title: 'Inicio',
      url: '/list',
      icon: 'ios-home'
    },
    {
      title: 'Logoff',
      url: '/logoff',
      icon: 'md-exit'
    },
    {
      title: 'Chat com Nutricionista',
      url: '/lista-de-nutricionistas',
      icon: 'md-chatbubbles'
    },
    {
      title: 'Seus Treinos',
      url: '/treino',
      icon: 'md-bicycle'
    },
    {
      title: 'Cardápio',
      url: '/lista-de-pratos',
      icon: 'nutrition'
    },
    {
      title: 'Carrinho',
      url: '/carrinho',
      icon: 'cart'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },

  ];
// 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private firebaseauth : AngularFireAuth,
    private router : Router,
    public activatedRoute: ActivatedRoute,
  ) {

    this.initializeApp();

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


  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.firebaseauth.authState
    .subscribe(
      user => {
        if (!user) {

          this.router.navigate(['/home']);
        }
      },
      () => {
       // this.router.navigate(['/list']);
      }
    );

}

downloadFoto() {
  let ref = firebase.storage().ref()
    .child(`usuario/${this.id}.jpg`);

  ref.getDownloadURL().then(url => {
    this.picture = url;
  })
}

Perfil() {
  this.router.navigate(['/perfil']);
}

}