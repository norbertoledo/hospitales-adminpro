import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;

  constructor(
      private _router: Router,
      public _title: Title,
      public _meta: Meta
    ) {

      this.getDataRoute().subscribe( (data) => {
        // console.log( 'Titulo: ', data.titulo );
        this.titulo = data.titulo;
        this._title.setTitle( this.titulo );

        // Recorro todos los metaTags del Array y los reasigno al <head>
        for (let i = 0; i < data.metaTags.length; i++) {
          const metaTag: MetaDefinition = data.metaTags[i];
          // console.log(metaTag);
          this._meta.updateTag(metaTag);
        }
      });

  }

  getDataRoute(): Observable<any> {
    return this._router.events
        // Filtro solo los eventos que sean de tipo ActivationEnd -> boolean
        .filter( evento => evento instanceof ActivationEnd )
        // Del resultado Filtro solo el evento que contenga un Objedo data y el mismo contenga el atributo titulo -> boolean
        .filter( (evento: ActivationEnd) => evento.snapshot.data.titulo )
        // Del resultado Obtengo unicamente el objeto data del evento filtrado -> object
        .map( (evento: ActivationEnd) => evento.snapshot.data);
  }


  ngOnInit() {
  }

}
