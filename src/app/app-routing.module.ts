import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
  { 
    path: '', component: PagesComponent,
    children: [
      { path: 'users', component: UsuariosComponent },
      {path: '', redirectTo: '/users', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
