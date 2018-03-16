import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.loadSettings();
   }

  saveSettings() {
    console.log('Guardando en el localStorage');
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  }

  loadSettings() {
    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse( localStorage.getItem( 'settings') );
      // console.log('cargando de localStorage');
    } else {
      // console.log('Utilizando valores por defecto');
    }
    this.applySettings ( this.settings.theme );
  }

  applySettings( nombreTema: string ) {

    const url: string = `/assets/css/colors/${ nombreTema }.css`;
    this._document.getElementById('theme').setAttribute('href', url);

    this.settings.themeUrl = url;
    this.settings.theme = nombreTema;

    this.saveSettings();
  }

}


interface Settings {
  themeUrl: string;
  theme: string;
}
