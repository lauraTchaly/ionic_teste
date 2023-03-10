import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Mensagem } from '../model/mensagem';
import { Nutricionista } from '../model/nutricionista';

@Component({
  selector: 'app-chat-nutri',
  templateUrl: './chat-nutri.page.html',
  styleUrls: ['./chat-nutri.page.scss'],
})
export class ChatNutriPage implements OnInit {

  idNutricionista: string;
  idUsuario: string;
  id: string;
  Nutricionista: Nutricionista = new Nutricionista();
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;

  conversa: Mensagem[] = [];

  formGroup: FormGroup;
  @ViewChild('txtarea') txtarea;


  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public nav: NavController,
    public firebaseauth: AngularFireAuth,
    private formBuilder: FormBuilder, ) {

    this.idNutricionista = this.activatedRoute.snapshot.paramMap.get('nutricionista');

    this.firebaseauth.authState.subscribe(obj => {
      this.idUsuario = this.firebaseauth.auth.currentUser.uid;

      console.log(this.idUsuario);

    });

  }

  ngOnInit() {

    this.obterPerfil();

    let ref = this.firestore.collection('usuario').doc(this.idUsuario).collection("mensagem").orderBy("data", "asc");
    ref.onSnapshot(doc => {

      doc.docChanges().forEach(c => {

        if (c.doc.data().para == this.idNutricionista || c.doc.data().de == this.idNutricionista) {
          let m = new Mensagem();

          m.setDados(c.doc.data());
          m.idSender = c.doc.data().de
          this.conversa.push(m);
          console.log(this.conversa);
        }
      })

    });

  }

  obterPerfil() {
    var ref = firebase.firestore().collection("nutricionista").doc(this.idNutricionista);

    ref.get().then(doc => {
      this.Nutricionista.setDados(doc.data());
      this.Nutricionista.id = doc.id;
      this.downloadFoto();
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });

  }

  downloadFoto() {
    let ref = firebase.storage().ref()
      .child(`nutricionista/${this.idNutricionista}.jpg`);

    ref.getDownloadURL().then(url => {
      this.imagem = url;
    })
  }

  atualiza() {
    let ref = this.firestore.doc('mensagem/' + this.idUsuario).collection(this.idNutricionista);
    ref.get().then(doc => {
      doc.forEach(c => {

        let m = new Mensagem();
        m.setDados(c.data());
        this.conversa.push(m);

      })

    })


  }

  enviarMensagem() {

    this.formGroup = this.formBuilder.group({
      data: [new Date()],
      mensagem: [this.txtarea.value],
      de: [this.idUsuario],
      para: [this.idNutricionista],

    });


    let ref = this.firestore.collection('usuario').doc(this.idUsuario).collection("mensagem").add(this.formGroup.value)
      .then(resp => {
        console.log('Cadastrado com sucesso');
        this.enviarNutricionista();
      }).catch(function () {
        console.log('Erro ao cadastrar');
      })

  }

  enviarNutricionista() {

    let ref = this.firestore.collection('nutricionista').doc(this.idNutricionista).collection("mensagem").add(this.formGroup.value)
      .then(resp => {
        console.log('Cadastrado com sucesso');
      }).catch(function () {
        console.log('Erro ao cadastrar');
      })
  }

  Home() {
    this.router.navigate(['/lista-de-nutricionistas']);
  }

}
