import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Policy } from '../models/policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private policiesUrl = 'api/policies';

  constructor(private _http:HttpClient) { }

  getPolices():Observable<Policy[]>{
    return this._http.get<Policy[]>(this.policiesUrl).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  getPolicyById(id:number):Observable<Policy>{
    return this._http.get<Policy>(`${this.policiesUrl}/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  searchPolicies(term: string|null): Observable<Policy[]> {
    term = term!.trim();
    const options = term ?
      { params: new HttpParams().set('num', term) } : {};

    return this._http.get<Policy[]>(this.policiesUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  getModuleUrl(){
    return 'searchable-list/';
  }
  private handleError(error: HttpErrorResponse) {
    console.error(error); 
    return throwError(error);
  }
}
