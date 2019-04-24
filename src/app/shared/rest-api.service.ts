import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funcionario } from '../shared/funcionario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  
  apiURL = environment.apiURL;

  // Métodos CRUD

  // Opções Http 
  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'responseType': 'text'
    })
  };

  // Faz o fetch da lista dos funcionários
  getFuncionarios():Observable<Funcionario>{
    return this.http.get<Funcionario>(this.apiURL + '/funcionario')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )  
  
    return null;
  }

  // Faz fetch do funcionário pelo ID
  getFuncionario(_id):Observable<Funcionario>{
    return this.http.get<Funcionario>(this.apiURL + '/funcionario/' + _id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Cria funcionário
  createFuncionario(funcionario):Observable<Funcionario>{
    /*
    console.log('createFuncionario(funcionario)...');
    console.log('funcionario._id: ' + funcionario._id);
    console.log('funcionario.nome: ' + funcionario.nome);
    console.log('funcionario.idade: ' + funcionario.idade);
    console.log('funcionario.cargo: ' + funcionario.cargo);

    console.log('JSON.stringify(funcionario): ' + JSON.stringify(funcionario));
    */
    return this.http.post<Funcionario>(this.apiURL + '/funcionario', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Atualiza funcionário
  updateFuncionario(_id, funcionario):Observable<Funcionario>{
    // console.log(' --------------- UPDATE --------------- ');
    // console.log('id : '+ _id);
    return this.http.put<Funcionario>(this.apiURL + '/funcionario/' + _id + '/update', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Deleta funcionário
  deleteFuncionario(_id){
    console.log(' --------------- DELETE --------------- ');
    console.log('id : '+ _id);
    console.log('URL : '+ this.apiURL + '/funcionario/' + _id)
    return this.http.delete<Funcionario>(this.apiURL + '/funcionario/' + _id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error){
    
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\nMessage:${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
