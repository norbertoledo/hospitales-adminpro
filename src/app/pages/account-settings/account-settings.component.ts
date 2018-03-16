import { Component, OnInit} from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _settings: SettingsService ) {
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarTema( nombreTema: string, link: any ) {
    this.cambiarCheck( link );
    this._settings.applySettings( nombreTema );
  }

  cambiarCheck( link: any ) {
    const selectores: any = document.getElementsByClassName('selector');
    // Remuevo la class working de cada uno de los elementos del html que tienen la class 'selector'
    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }
    // Asigno el tilde al objeto que fue seleccionado con la referencia link
    link.classList.add('working');
  }

  colocarCheck() {
    const theme: string = this._settings.settings.theme;
    const selectores: any = document.getElementsByClassName( 'selector' );
    for ( const ref of selectores ) {
      if ( ref.getAttribute( 'data-theme' ) === theme ) {
        ref.classList.add( 'working' );
      }
    }
  }


}
