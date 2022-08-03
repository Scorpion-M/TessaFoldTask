import { Policy } from './../models/policy.model';
import { Observable } from 'rxjs';
import { PolicyService } from './../services/policies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'


@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  policyId:number = 0;
  policy$:Observable<Policy> = new Observable<Policy>();
  constructor(private _policyService:PolicyService,private _route:ActivatedRoute,private _location:Location) { 
    this.policyId = this._route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getPolicyDetials();
  }
  getPolicyDetials(){
    this.policy$ = this._policyService.getPolicyById(this.policyId)
  }
  backToListPolicies(){
    this._location.back()
  }
}
