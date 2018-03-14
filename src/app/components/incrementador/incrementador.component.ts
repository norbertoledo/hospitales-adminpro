import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  // Recibe referencia a un OBJETO html en particular.
  @ViewChild('txtProgress') txtProgress: ElementRef;


  // Recibe datos del padre
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() progreso: number = 50;

  // Envia datos al padre
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number) {

    // Detecto con JS el input que está ejecutando el evento. Devuelve un array de todos los objetos que tienen ese name
    // let elemHTML: any = document.getElementsByName('cProgreso')[0];

    // console.log( 'El Objeto Input: ', elemHTML );
    // console.log( 'Valor del Input: ', elemHTML.value );


    if ( newValue >= 100) {
      newValue = 100;
    } else if ( newValue < 0 || newValue == null) {
      newValue = 0;
    }
    this.progreso = newValue;
    // console.log('newValue: ', newValue);

    // elemHTML.value = Number( this.progreso ); // Fuerzo el casting a number

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit ( this.progreso );
  }

  cambiarProgreso(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
      this.progreso += valor;
      this.cambioValor.emit( this.progreso );

      this.txtProgress.nativeElement.focus();
  }


}
