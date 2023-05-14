import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  
  {
    path: 'home',
    component: HomePage,
  children: [
    {
      path: 'ejercicios',
      loadChildren: () => import('../ejercicios/ejercicios.module').then( m => m.EjerciciosPageModule)
    },
    {
      path: 'recetas',
      loadChildren: () => import('../recetas/recetas.module').then( m => m.RecetasPageModule)
    },
    {
      path: 'peso',
      loadChildren: () => import('../peso/peso.module').then( m => m.PesoPageModule)
    },
      {
        path: '',
        redirectTo: '/home/ejercicios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/ejercicios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
