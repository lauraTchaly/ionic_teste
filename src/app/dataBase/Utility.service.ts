import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
@Injectable({
    providedIn: "root"
})

export class UtilityService{
    constructor(
        // Ferramenta do carregando
        private loading: LoadingController,

        // Ferramenta do Toast(mensagem)
         private toast: ToastController
    ){}

    // Método de loading

    async carregando(message: string, duration:number){

        const load = this.loading.create({

            mode: 'ios',
            message,
            duration
        });

        (await load).present();
    }
    // Método do Toast

    async tostando(message: string, position: "top" | "middle" | "bottom",
    duration: number, color: string){
        const toastei = this.toast.create({
            message,
            position,
            duration,
            color
        });

        (await toastei).present();
        setTimeout(this.refresh, 2000);
    }

    // Método do reload
    refresh(){
        location.reload();
    }
}