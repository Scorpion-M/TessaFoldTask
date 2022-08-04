import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { PolicyService } from './policies.service';
import { findPolicies, POLICIES } from 'mock-data/db-data';

describe('PolicyService', () => {
  let service: PolicyService,
    httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[
        PolicyService
      ]
    });
    service = TestBed.inject(PolicyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  fit('retrive All Policies', () => {
    service.getPolices().subscribe(policies =>{
      expect(policies).toBeTruthy('No Policies returned');
      expect(policies.length).toBe(4,"incorrect Number of Policies");

      const policy = policies.find(policy => policy.id == 4);
      expect(policy?.num).toBe('PO4');

    });
    const req = httpTestingController.expectOne('api/policies');
    expect(req.request.method).toEqual('GET');
    req.flush(Object.values(POLICIES))
    
  }); 
  fit('should find a policy by Id', () => {
    service.getPolicyById(3).subscribe(policy =>{
      expect(policy).toBeTruthy();
      expect(policy.id).toBe(3);
    });
    const req = httpTestingController.expectOne('api/policies/3');
    expect(req.request.method).toEqual('GET');
    req.flush(POLICIES[3]);
    
  }); 
  fit('should find a list of policies',() =>{
    service.searchPolicies('PO3').subscribe(policies =>{
      expect(policies).toBeTruthy();
      expect(policies.length).toBe(1);

    });
    const req = httpTestingController.expectOne(req => req.url == 'api/policies');
    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('num')).toEqual('PO3');
    req.flush(findPolicies('PO3'));

  })
  afterEach(()=>{
    httpTestingController.verify();
  })
});
