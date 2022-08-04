import { RouterTestingModule } from '@angular/router/testing';
import { SearchableListModule } from './../searchable-list.module';
import { PolicyService } from './../services/policies.service';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliciesListComponent } from './policies-list.component';
import { setupPolicies } from 'mock-data/db-data';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Router, Routes } from '@angular/router';

describe('PoliciesListComponent', () => {
  let component: PoliciesListComponent;
  let fixture: ComponentFixture<PoliciesListComponent>;
  let el :DebugElement;
  let routerTesting:Router;
  let location:Location;
  let policyService:any;

  const policiesList = setupPolicies();
  beforeEach(async () => {
    const PolicyServiceSpy = jasmine.createSpyObj('PolicyService',['getPolices']);
    const routerSpy = jasmine.createSpy('navigate')

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule,SearchableListModule ],
      providers:[
        {provide:PolicyService,useValue:PolicyServiceSpy},
        {provide:Router,useValue:routerSpy}
      ]

    })
    .compileComponents().then(() =>{
      fixture = TestBed.createComponent(PoliciesListComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
      policyService = TestBed.inject(PolicyService);
      routerTesting = TestBed.inject(Router);
    });

  
  });

  fit('should create the component', () => {
    expect(component).toBeTruthy();
  });
  fit('should dispaly all policies', () => {
    policyService.getPolices.and.returnValue(of(policiesList));
    fixture.detectChanges();
    const policies = el.queryAll(By.css('.row'));
    expect(policies).toBeTruthy('could not find row');
    expect(policies.length).toBe(4,'Unexpected number of policies');

  });
});
