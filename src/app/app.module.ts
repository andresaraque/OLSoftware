import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PagesComponent } from './pages/pages.component';
import { SidebarComponent } from './pages/components/sidebar/sidebar.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { FooterComponent } from './pages/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent,
    SidebarComponent,
    NavbarComponent,
    UsuariosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
