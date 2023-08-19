import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { Declarant } from '../models/declarant.model';

const baseURL= "http://localhost:8081/api/declarants";

@Injectable({
  providedIn: 'root'
})
export class DeclarantService {

  constructor(private http:HttpClient) { }

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    }),
  };

  getDeclarantsList(): Observable<Declarant>{
    return this.http.get<Declarant>(baseURL)
    ; 
 }
 getDeclarant(id:any):Observable<Declarant>{
  return this.http.get<Declarant>(`${baseURL}/${id}`);
 }

 

 addDeclarant(data:any): Observable<Declarant> {
  return this.http.post<Declarant>(
    baseURL, JSON.stringify(data),
    this.httpOptions)
    .pipe(retry(1),catchError(this.errorHandle));
}
updateDeclarant(Id:number, data:Declarant): Observable<Declarant> {
  return this.http
    .put<Declarant>(
      `${baseURL}/${Id}`,
      JSON.stringify(data),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandle));
}

deleteDeclarant(id:number): Observable<Declarant> {
  return this.http.delete<Declarant>(`${baseURL}/${id}`,this.httpOptions)
  .pipe(retry(1), catchError(this.errorHandle));
}

errorHandle(error:any) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(() => {
    return errorMessage;
  });
}

}


