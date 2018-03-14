import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/*Rutas*/
import { APP_ROUTES } from './app.routes';

/*Modulos*/
import { PagesModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';

/*Componentes*/
import { AppComponent } from './app.component';


// temporal
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    APP_ROUTES,
    BrowserModule,
    PagesModule,
    LoginModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
