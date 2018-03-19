import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contarTres().then(
      (mensaje) => {
        console.log('Terminó!', mensaje);
      })
      .catch( error => {
        console.error('Error en la promesa', error);
      });
  }

  ngOnInit() {
  }


  contarTres(): Promise<Boolean> {
    const promesa: Promise<Boolean> = new Promise( (resolve, reject) => {
      let contador: number = 0;

      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000 );
    });

    return promesa;

    /*
    En lugar de asignar y retornar la promesa, podemos resumirlo en:

    return new Promise( (resolve, reject) => {
      let contador: number = 0;

      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve( true );
          clearInterval(intervalo);
        }
      }, 1000 );
    });

    */
  }

}
