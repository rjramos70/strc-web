import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioCreateComponent } from './funcionario-create/funcionario-create.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'create-funcionario'},
  {path:'create-funcionario', component: FuncionarioCreateComponent},
  {path:'funcionario-details', component: FuncionarioDetailsComponent},
  {path:'update-funcionario/:_id', component: FuncionarioUpdateComponent},
  {path:'funcionario-list', component: FuncionarioListComponent},
  {path:'test', component: FuncionarioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
