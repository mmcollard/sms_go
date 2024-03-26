import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { GruposComponent } from './grupos/grupos.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: 'grupos', 
    component: GruposComponent 
  },
  {
    path: 'login',
    component: LoginComponent
  }
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
