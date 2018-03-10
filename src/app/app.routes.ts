import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const AppRoutes: Routes = [

    {path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot( AppRoutes, { useHash: true } );

