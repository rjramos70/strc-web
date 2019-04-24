import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// módulo HttpClient para RESTful API
import { HttpClientModule } from '@angular/common/http';

// módulo Rotas para os serviós de rotas
import { AppRoutingModule } from './app-routing.module';

// módulo dos formulários
import { FormsModule } from '@angular/forms';

// Componentes
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';


// import {  } from './';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCreateComponent,
    FuncionarioDetailsComponent,
    FuncionarioUpdateComponent,
    FuncionarioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
