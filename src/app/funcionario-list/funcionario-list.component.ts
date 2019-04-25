import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  Funcionarios: any = [];

  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.loadFuncionarios()
  }

  /**
   * Carrega lista de funcionarios
   */
  loadFuncionarios(){
    return this.restApi.getFuncionarios().subscribe((data: {}) => {
      this.Funcionarios = data;
    });
  }

  /**
   * Remove funcionário com base no ID
   * @param _id 
   */
  deleteFuncionario(_id){
    if(window.confirm('Tem certeza que quer remover este funcionário?')){
      this.restApi.deleteFuncionario(_id).subscribe(data => {
        this.loadFuncionarios()
        this.router.navigate(['/funcionario-list'])
      })
    }
  }
  
}
