import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { Declaration } from '../models/declaration.model';

const baseURL= "http://localhost:8081/api/declarations";
@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  constructor(private http:HttpClient) { }

  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    }),
  };

  getDeclarationsList(): Observable<Declaration>{
    return this.http.get<Declaration>(baseURL)
    ; 
 }
 getDeclaration(id:any):Observable<Declaration>{
  return this.http.get<Declaration>(`${baseURL}/${id}`);
 }

 

 addDeclaration(data:any): Observable<Declaration> {
  return this.http.post<Declaration>(
    baseURL, JSON.stringify(data),
    this.httpOptions)
    .pipe(retry(1),catchError(this.errorHandle));
}
updateDeclaration(Id:number, data:Declaration): Observable<Declaration> {
  return this.http
    .put<Declaration>(
      `${baseURL}/${Id}`,
      JSON.stringify(data),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandle));
}

deleteDeclaration(id:number): Observable<Declaration> {
  return this.http.delete<Declaration>(`${baseURL}/${id}`,this.httpOptions)
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
