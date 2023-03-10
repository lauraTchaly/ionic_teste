export class Mensagem{

    data : string;
    idUsuario : string;
    mensagem : string;
    idSender : string;
    constructor(){}

    setDados(obj : any){
        //this.data = obj.data;
        this.idSender = obj.idSender;
        this.mensagem = obj.mensagem;
    }
}