import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  @Input() funcionarioDetails = { nome: '', idade: '', cargo: ''}

  constructor(
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addFuncionario(dataFuncionario){
    // console.log('Funcionario: ' + JSON.stringify(this.funcionarioDetails));
    this.restApi.createFuncionario(this.funcionarioDetails).subscribe((data:{}) => {
      this.router.navigate(['/funcionario-list'])
    })
  }

}
