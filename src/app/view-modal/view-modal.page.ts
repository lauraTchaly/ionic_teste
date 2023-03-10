import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Modal } from '../model/modal';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Prato } from '../model/prato';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.page.html',
  styleUrls: ['./view-modal.page.scss'],
})
export class ViewModalPage implements OnInit {

  pratoID : any;
  prato : Prato = new Prato();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;
  formGroup: FormGroup; // <----


  constructor(public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public nav: NavController) {// <----

    this.pratoID = this.activatedRoute.snapshot.paramMap.get('prato');
    
    // <----
  }

 

  ngOnInit() {
   
   this.buscaID();
  }
 
  ListaDePratos() {
    this.router.navigate(['/lista-de-pratos']);
  }
  Home() {
    this.router.navigate(['/lista-de-pratos']);
  }
  Carrinho() {
    this.router.navigate(['/carrinho']);
  }
  

  buscaID(){
    var ref = firebase.firestore().collection("prato").doc(this.pratoID).get().then(doc => {

      if (doc.exists) {


        
          this.prato.setDados(doc.data());
          this.prato.id = doc.id;
        

          let ref = firebase.storage().ref().child(`pratos/${doc.id}.jpg`).getDownloadURL().then(url => {
            this.prato.imagem = url;

          })
            .catch(err => {
 
            })


      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
  }



  enviaArquivo(event) {
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
      .child(`pratos/${this.id}.jpg`);

    ref.put(imagem).then(url => {
      console.log("Enviado com sucesso!");
   
    })

  }







}

