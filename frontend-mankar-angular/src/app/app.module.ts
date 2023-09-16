import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';


import { WelcomeComponent } from './Modulos/welcome/welcome.component';
import { LoginAppComponent } from './Modulos/login-app/login-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes:Routes=[
  {path: '', redirectTo: 'inicio', pathMatch: 'full' },
  {path: 'inicio', component: WelcomeComponent, pathMatch: 'full'  },
  {path: 'inicio-sesion', component: LoginAppComponent, pathMatch: 'full'  },/*
  {path: 'principal/:User', component: PrincipalComponent, pathMatch: 'full'}
 */
]

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



