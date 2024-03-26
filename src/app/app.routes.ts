import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GruposComponent } from './grupos/grupos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'panel' },
  {
    path: 'panel',
    component: HomeComponent
  },
  {
    path: 'grupos',
    component: GruposComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  // Otras rutas aquí
  { path: '**', pathMatch: 'full', redirectTo: 'panel' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
