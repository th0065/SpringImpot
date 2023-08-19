import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import {HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import { Paiement } from '../models/paiement.model';

const baseURL= "http://localhost:8081/api/paiements";

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http:HttpClient) { }
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
    }),
  };
  getPaiementsList(): Observable<Paiement>{
    return this.http.get<Paiement>(baseURL)
    ; 
 }
 getPaiement(id:any):Observable<Paiement>{
  return this.http.get<Paiement>(`${baseURL}/${id}`);
 }

 

 addPaiement(data:any): Observable<Paiement> {
  return this.http.post<Paiement>(
    baseURL, JSON.stringify(data),
    this.httpOptions)
    .pipe(retry(1),catchError(this.errorHandle));
}
updatePaiement(Id:number, data:Paiement): Observable<Paiement> {
  return this.http
    .put<Paiement>(
      `${baseURL}/${Id}`,
      JSON.stringify(data),
      this.httpOptions
    )
    .pipe(retry(1), catchError(this.errorHandle));
}

deletePaiement(id:number): Observable<Paiement> {
  return this.http.delete<Paiement>(`${baseURL}/${id}`,this.httpOptions)
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
