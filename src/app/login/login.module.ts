import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { LOGING_ROUTES } from './login.routes';
import { FormsModule } from '@angular/forms';



@NgModule ({

    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        LOGING_ROUTES,
        FormsModule
    ]

})

export class LoginModule { }
