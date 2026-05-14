import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'books', pathMatch: 'full' },
    {
        path: 'authors',
        loadComponent: () => import('./features/pages/authors/authors').then(m => m.Authors)
    }
    ,
    { path: '**', redirectTo: 'books' }
];
