import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('@home/components/home.component'),
  },
  {
    path: 'card',
    loadComponent: () => import('@shared/components/card-service.component'),
  },
];
