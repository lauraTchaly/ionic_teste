export class Parceria{

    id : string;
    nome : string;
    descricao : string;
    endereco : string;
    valor : string;
    imagem : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.descricao = obj.descricao;
        this.endereco = obj.endereco;
        this.valor = obj.valor;
    }
}