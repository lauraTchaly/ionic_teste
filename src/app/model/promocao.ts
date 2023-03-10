export class Promocao{

    id : string;
    nome : string;
    descricao : string;
    ingrediente : string;
    valor : string;
    imagem : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.ingrediente = obj.ingrediente;
        this.valor = obj.valor;
    }
}