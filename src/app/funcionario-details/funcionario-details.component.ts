import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-funcionario-details',
  templateUrl: './funcionario-details.component.html',
  styleUrls: ['./funcionario-details.component.css']
})
export class FuncionarioDetailsComponent implements OnInit {

  @Input() funcionarioDetails = { nome: '', idade: '', cargo: ''}

  Funcionarios: any = [];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    
  }
  /**
   * Pesquisa funcionários com base nos filtros preenchidos
   * @param dataFuncionario 
   */
  pesquisarFuncionarios(dataFuncionario){    
    this.restApi.pesquisar(this.funcionarioDetails).subscribe((data:{}) => {
      this.Funcionarios = data;
    })
  }

}
