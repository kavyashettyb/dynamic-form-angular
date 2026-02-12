import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'dynamicForm', pathMatch: 'full'
    },
    {
        path: 'dynamicForm', 
        loadComponent: () => import('./features/dynamic-form/pages/dynamic-form/dynamic-form').then(m => m.DynamicForm)
    }
];
