import { Directive } from '@angular/core';

@Directive({
  selector: '[calculos]' // Attribute selector
})
export class CalculosDirective {

  static calcularImc(alt: number, peso: number): number{
    return ( peso / ( alt * alt ));
  }

  static informarImc(imc: number): string{
    if(imc < 16)
      return "Magreza grave";
    else if(imc < 17)
      return "Magreza moderada";
    else if(imc < 18.5)
      return "Magreza leve";
    else if(imc < 25)
      return "Saudável";
    else if(imc < 30)
      return "Sobrepeso";
    else if(imc < 35)
      return "Obesidade grau I";
    else if(imc < 40)
      return "Obesidade grau II (Severa)";
    else
      return "Obesidade grau III (Mórbida)";
/*
< 16	Magreza grave
16 a < 17	Magreza moderada
17 a < 18,5	Magreza leve
18,5 a < 25	Saudável
25 a < 30	Sobrepeso
30 a < 35	Obesidade Grau I
35 a < 40	Obesidade Grau II (severa)
> 40	Obesidade Grau III (mórbida)
(Fonte: WikiPedia)
*/
  }

  constructor() {
    console.log('Hello CalculosDirective Directive');
  }

}