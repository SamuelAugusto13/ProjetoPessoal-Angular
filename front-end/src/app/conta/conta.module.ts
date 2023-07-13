import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContaAppComponent } from './conta.app.component';

import { ContaRoutingModule } from './conta.route';


@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ContaModule { }
