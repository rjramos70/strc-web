import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

  _id = this.actRoute.snapshot.params['_id'];
  funcionarioData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.restApi.getFuncionario(this._id).subscribe((data: {}) => {
      this.funcionarioData = data;
    })
  }

  // Atualizar dados do funcionário
  updateFuncionario(_id){
    if(window.confirm('Tem certeza que deseja atualizar este funcionário?')){
      this.restApi.updateFuncionario(this._id, this.funcionarioData).subscribe(data => {
        console.log('Funcionário atualizado com sucesso, redirecionar para /funcionario-list');
        this.router.navigate(['/funcionario-list']);
      })
    }
  }
}
