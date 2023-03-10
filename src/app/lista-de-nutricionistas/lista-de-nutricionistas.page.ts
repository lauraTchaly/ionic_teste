import { Component, OnInit } from '@angular/core';
import { Nutricionista } from '../model/nutricionista';
import * as firebase from 'firebase';
import { NavParams, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../model/usuario';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-lista-de-nutricionistas',
  templateUrl: './lista-de-nutricionistas.page.html',
  styleUrls: ['./lista-de-nutricionistas.page.scss'],
})
export class ListaDeNutricionistasPage implements OnInit {

  id: string;
  Usuario: Usuario = new Usuario();
  picture: string = "../../assets/imagens/1.gif";

  listaDeNutricionistas: Nutricionista[] = [];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };

  idList : String[] = [];
  
  constructor(public router: Router, public loadingController: LoadingController, private firebaseauth : AngularFireAuth,) {

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
    this.getList();
  }

  viewNutricionista(obj: Nutricionista) {
    this.router.navigate(['/nutricionista-view', { 'nutricionista': obj.id }]);
    this.presentLoading();
  }

  Chat(obj: Nutricionista) {
    this.router.navigate(['/chat-nutri', { 'nutricionista': obj.id }]);
  }

  perfilNutri(obj: Nutricionista) {
    this.router.navigate(['/perfil-nutri', { 'nutricionista': obj.id }]);
  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`usuario/${this.id}.jpg`);
  
    ref.getDownloadURL().then(url => {
      this.picture = url;
    })
  }

  getList() {
    
    var ref = firebase.firestore().collection("nutricionista")
    ref.get().then(doc => {

      doc.forEach(item =>{

        let n = new Nutricionista();
        n.id = item.id;

        var ref = firebase.firestore().collection("nutricionista").doc(n.id).get().then(doc =>{
          n.nome = doc.data().nome;
          n.setDados(n);
          this.listaDeNutricionistas.push(n);
        });
      });

      console.log(this.listaDeNutricionistas);
    
       });
   
  }

  Perfil() {
    this.router.navigate(['/perfil']);
  }

  Home() {
    this.router.navigate(['/list']);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando',
      duration: 2000
    });
    await loading.present();


  }


}
