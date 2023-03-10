import { Prato } from './prato';
import { PratoVegano } from './pratovegano';
import { PratoVegetariano } from './pratovegetariano'


export class Item {
    prato: Prato;
    pratovegano: PratoVegano;
    pratovegetariano: PratoVegetariano;
  
    quantidade: number;

}



