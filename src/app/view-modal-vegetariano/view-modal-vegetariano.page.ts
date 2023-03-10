import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Modal } from '../model/modal';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { PratoVegetariano } from '../model/pratovegetariano';

@Component({
  selector: 'app-view-modal-vegetariano',
  templateUrl: './view-modal-vegetariano.page.html',
  styleUrls: ['./view-modal-vegetariano.page.scss'],
})
export class ViewModalVegetarianoPage implements OnInit {

  pratoID : any;
  pratovegetariano : PratoVegetariano = new PratoVegetariano();
  id: string;
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  imagem;
  formGroup: FormGroup; // <----


  constructor(public activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public router: Router,
    public nav: NavController) {// <----

    this.pratoID = this.activatedRoute.snapshot.paramMap.get('pratovegetariano');
    
    // <----
  }

 

  ngOnInit() {
   
   this.buscaID();
  }
 
  ListaDePratosVegetariano() {
    this.router.navigate(['/lista-de-pratos-vegetariano']);
  }
  Home() {
    this.router.navigate(['/lista-de-pratos-vegetariano']);
  }
  Carrinho() {
    this.router.navigate(['/carrinho']);
  }


  buscaID(){
    var ref = firebase.firestore().collection("pratovegetariano").doc(this.pratoID).get().then(doc => {

      if (doc.exists) {


        
          this.pratovegetariano.setDados(doc.data());
          this.pratovegetariano.id = doc.id;
        

          let ref = firebase.storage().ref().child(`pratos/${doc.id}.jpg`).getDownloadURL().then(url => {
            this.pratovegetariano.imagem = url;

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



