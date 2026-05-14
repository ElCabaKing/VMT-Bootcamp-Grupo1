import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'authors',
        loadComponent: () => import('./pages/authors/authors').then(m => m.Authors)
    }
];
