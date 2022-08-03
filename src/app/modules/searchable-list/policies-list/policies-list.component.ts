import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Policy } from '../models/policy.model';
import { PolicyService } from '../services/policies.service';

@Component({
  selector: 'app-policies-list',
  templateUrl: './policies-list.component.html',
  styleUrls: ['./policies-list.component.scss']
})
export class PoliciesListComponent implements OnInit,OnDestroy {

  constructor(private _policyService:PolicyService,private _router:Router) { }

  searchSubscription:Subscription = new Subscription();
  searchForm:FormControl<string|null> = new FormControl<string|null>('');
  policies$:Observable<Policy[]> = new Observable<Policy[]>();
  
  ngOnInit(): void {
    this.getAllPolicies();
    this.onSearch()
  }

  getAllPolicies():void{
    this.policies$ = this._policyService.getPolices();
  }

  onSearch():void {
    this.searchSubscription = this.searchForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(700)
    ).subscribe(value =>{
      this.searchPolicies(value);
    })
  }
  searchPolicies(policyNum:string|null):void{
    this.policies$ = this._policyService.searchPolicies(policyNum);
  }
  navigateToPolicyDetails(policyId:number){
    this._router.navigate([this._policyService.getModuleUrl()+`policy-details/${policyId}`]);
  }


  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe()
  }
}
