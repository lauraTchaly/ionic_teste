export class Finalizar{

    id : string;
    nome : string;
    endereco : string;
    bairro : string
    cidade : string;
    cep : string;
    cpf : string;
    telefone : string;
    email : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nome = obj.nome;
        this.endereco = obj.endereco;
        this.bairro = obj.bairro;
        this.cidade = obj.cidade;
        this.cep = obj.cep;
        this.cpf = obj.cpf;
        this.telefone = obj.telefone;
        this.email = obj.email;
    }
}