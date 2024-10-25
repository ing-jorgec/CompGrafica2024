import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginTestComponent } from './components/login-test/login-test.component';

export const routes: Routes = [
{

    path: 'login',
    component: LoginComponent

},

{

    path: 'register',
    component: RegisterComponent

},

{

    path: 'home',
    component: HomeComponent

},
{
 path:'logintest',
 component: LoginTestComponent
},
{
path: '', redirectTo: 'home', pathMatch: 'full'
}

   



];
