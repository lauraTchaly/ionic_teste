export class Nutricionista{
 
    id : string;
    nome: string;
    sobrenome: string;
    telefone: string;
    cel: string;
    cidade: string;
    imagem : string;
   
    constructor(){   
    }

    // Dados do firebase
       setDados(obj : any){
       this.id = obj.id;
        this.nome = obj.nome;
        this.sobrenome = obj.sobrenome;
        this.telefone = obj.telefone;
        this.cel = obj.cel;
        this.cidade = obj.cidade;
    
    }

}