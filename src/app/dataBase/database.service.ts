import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
 import { Produto } from '../model/produto';
import { identity } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }


  HttpOptions = {

    headers: new HttpHeaders({'content-Type' : 'applications/json'})
  }
// API é o nome da variável que será só de leitura(READONLY)
readonly API = "http://localhost:3000/lista";

getItem(){
  return this.http.get<Produto[]>(this.API);
}

// MÉTODO TRAZER UM UNICO ITEM
getOneItem(id: number){

   return this.http.get<Produto>(this.API + id);

}

// MÉTODO PARA APAGAR UM ITEM
delItem(id:number){

  return this.http.delete(this.API + id).subscribe()

}

// MÉTODO DE ALTERAÇÃO DE STATUS
statusItem(item: Produto){
  return this.http.put(this.API + item.id,JSON.stringify(item),
  this.HttpOptions).subscribe();
}

// MÉTODOS PARA ATUALIZAR OS DADOS
UpdateItem(id: any, item: Produto){
  return this.http.put(this.API + id, 
  JSON.stringify(item),
  this.HttpOptions).subscribe()
}

// MÉTODO PARA CADASTRAR UM ITEM
postItem(dados: any){

    return this.http.post(
      this.API, JSON.stringify(dados),
      this.HttpOptions).subscribe()

}



}
