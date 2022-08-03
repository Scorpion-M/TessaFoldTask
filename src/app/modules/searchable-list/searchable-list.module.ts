import { PoliciesListComponent } from './policies-list/policies-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchableListRoutingModule } from './searchable-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//primeNg 
import { TableModule } from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';


@NgModule({
  declarations: [
    PoliciesListComponent,
    PolicyDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchableListRoutingModule,
    //primeNg 
    TableModule,
    InputTextModule,
    ProgressSpinnerModule,
    ButtonModule,
    TooltipModule
  ]
})
export class SearchableListModule { }
