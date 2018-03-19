import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';




const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    titulo: 'Dashboard',
                    metaTags: [
                        {name: 'description', content: 'Pagina principal'},
                        {name: 'keywords', content: 'Angular, Backend, Frontend'},
                        {name: 'author', content: 'Norberto Ledo'},
                    ]
                }
            },
            {
                path: 'progress',
                component: ProgressComponent,
                data: {
                    titulo: 'Progress Bars',
                    metaTags: [
                        {name: 'description', content: 'Barras de progreso'},
                        {name: 'keywords', content: 'Angular, Animation, Bootstrap'},
                        {name: 'author', content: 'Norberto Ledo'},
                    ]
                }
            },
            {
                path: 'graficas1',
                component: Graficas1Component,
                data: {
                    titulo: 'Graficas',
                    metaTags: [
                        {name: 'description', content: 'Graficos en Angular'},
                        {name: 'keywords', content: 'Angular, Animation, Graficos'},
                        {name: 'author', content: 'Norberto Ledo'},
                    ]
                }
            },
            {
                path: 'promesas',
                component: PromesasComponent,
                data: {
                    titulo: 'Promesas',
                    metaTags: [
                        {name: 'description', content: 'Promesas en Angular'},
                        {name: 'keywords', content: 'Angular, Promesas'},
                        {name: 'author', content: 'Norberto Ledo'},
                    ]
                }
            },
            {
                path: 'rxjs',
                component: RxjsComponent,
                data: {
                    titulo: 'RxJS',
                    metaTags: [
                        {name: 'description', content: 'Observables, filter, maps y subscribe'},
                        {name: 'keywords', content: 'Angular, Observables'},
                        {name: 'author', content: 'Norberto Ledo'},
                    ]
                }
            },
            {
                path: 'account-settings',
                component: AccountSettingsComponent,
                data: {
                    titulo: 'Layout Settings',
                    metaTags: [
                        {name: 'description', content: 'Layout dinamico con css'},
                        {name: 'keywords', content: 'Angular, CSS3, Layouts'},
                        {name: 'author', content: 'Norberto Ledo'},
                    ]
                }
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ]
    }
];

export const PAGES_ROUTES =  RouterModule.forChild ( pagesRoutes );
