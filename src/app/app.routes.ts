import { Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { HomeComponent } from './Components/home/home/home.component';
import { CatalogoComponent } from './Components/catalogo/catalogo.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
  {
    path: '', 
    component: LandingComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'catalogo/:categoria', 
    component: CatalogoComponent
  },
  {
    path: 'catalogo', 
    redirectTo: 'catalogo/todas',
    pathMatch: 'full'
  },
  {
    path: 'contacto', 
    component: ContactoComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: '**', 
    redirectTo: ''
  }
];
