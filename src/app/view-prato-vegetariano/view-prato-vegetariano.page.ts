import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PratoVegetariano} from '../model/pratovegetariano'
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-prato-vegetariano',
  templateUrl: './view-prato-vegetariano.page.html',
  styleUrls: ['./view-prato-vegetariano.page.scss'],
})
export class ViewPratoVegetarianoPage implements OnInit {

  pratovegetariano : PratoVegetariano = new PratoVegetariano();
  id : string;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: true};
  imagem;
  formGroup : FormGroup; // <----
  

  constructor(public  activatedRoute: ActivatedRoute, 
    public formBuilder : FormBuilder,
    public router : Router,
    public nav : NavController) {// <----
      this.id = this.activatedRoute.snapshot.paramMap.get('pratovegetariano');
      console.log(this.id)
      this.form(); // <----
  }

  form(){// <----
    this.formGroup = this.formBuilder.group({
      nome : [this.pratovegetariano.nome],
      descricao : [this.pratovegetariano.descricao],
      ingrediente : [this.pratovegetariano.ingrediente],
      valor : [this.pratovegetariano.valor],
    });
  }

  ngOnInit() {
    this.downloadFoto();
    this.obterPratoVegetariano();
  }

  obterPratoVegetariano(){
    var ref = firebase.firestore().collection("pratovegetariano").doc(this.id);
  
    ref.get().then(doc => {
        this.pratovegetariano.setDados(doc.data());
        this.form();
        
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
  }

  atualizar(){
    let ref = this.firestore.collection('pratovegetariano')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        console.log('Atualizado com sucesso');
        this.nav.navigateRoot('/lista-de-pratos-vegetariano');
      }).catch(()=>{
        console.log('Erro ao Atualizar');
      })
  }

  enviaArquivo(event){
    let imagem = event.srcElement.files[0];
    console.log(imagem.name);
    let ref = firebase.storage().ref()
                  .child(`pratos/${this.id}.jpg`);
    
    ref.put(imagem).then(url=>{
      console.log("Enviado com sucesso!");
      this.downloadFoto();
    })
  
  }
  
  downloadFoto(){
    let ref = firebase.storage().ref()
      .child(`pratos/${this.pratovegetariano.id}.jpg`);
  
      ref.getDownloadURL().then( url=>{ 
        this.imagem = url;
      })
  }
  
  
  
  
  
  }



