import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { NomenclatureListComponent } from './component/nomenclature/nomenclature-list/nomenclature-list.component';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "login", component: LoginComponent},
  {path: "nomenclature", component: NomenclatureListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
