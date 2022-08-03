import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { PoliciesListComponent } from './policies-list/policies-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'policies-list',
    component:PoliciesListComponent
  },
  {
    path:'policy-details/:id',
    component:PolicyDetailsComponent
  },
  {
    path:'**',
    redirectTo:'policies-list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchableListRoutingModule { }
