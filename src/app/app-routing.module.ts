import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'searchable-list',
    loadChildren:() => import('./modules/searchable-list/searchable-list.module').then(m => m.SearchableListModule)
  },
  { path: '**', redirectTo: 'searchable-list' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
