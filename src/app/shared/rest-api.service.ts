import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Funcionario } from '../shared/funcionario';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

// import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';
// import { httpFactory } from '@angular/http/src/http_module';

/**
 * Classe de serviço que executa as requisições para os endpoints da API Rest
 */
@Injectable({ providedIn: 'root' })
export class RestApiService {

  constructor(private http: HttpClient) { }
  
  apiURL = environment.apiURL;

  // Métodos CRUD

  /**
   * Seta os parametros do header
   */
  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'responseType': 'text'
    })
  };

  /**
   * Lista todos os funcionários cadastrados
   */
  getFuncionarios():Observable<Funcionario>{
    return this.http.get<Funcionario>(this.apiURL + '/funcionario')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )  
  
    return null;
  }

  /**
   * Obtem funcionário pelo ID
   * @param _id 
   */
  getFuncionario(_id):Observable<Funcionario>{
    return this.http.get<Funcionario>(this.apiURL + '/funcionario/' + _id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Cadastra funcionário
   * @param funcionario 
   */
  createFuncionario(funcionario):Observable<Funcionario>{
    return this.http.post<Funcionario>(this.apiURL + '/funcionario', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Pesquisa funcionários com base nos filtros preenchidos
   * @param funcionario
   */
  pesquisar(funcionario):Observable<Funcionario>{
    return this.http.post<Funcionario>(this.apiURL + '/funcionario/pesquisar', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Atualiza funcionário
   * @param _id 
   * @param Funcionario 
   */
  updateFuncionario(_id, funcionario):Observable<Funcionario>{
    return this.http.put<Funcionario>(this.apiURL + '/funcionario/' + _id + '/update', JSON.stringify(funcionario), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Remove funcionário com base no ID
   * @param _id 
   */
  deleteFuncionario(_id){
    return this.http.delete<Funcionario>(this.apiURL + '/funcionario/' + _id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  /**
   * Error handling
   * @param error 
   */
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
