import { Periode } from './periode/periode';
import { HttpClient, HttpErrorResponse,  HttpHeaders, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PeriodeService {


  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};
  urlApi = 'http://127.0.0.1:8000/Periode/';  // URL de l'API
  propriete: any;
    constructor(private http: HttpClient) {
  }

  getAllpropriete() : Observable<Array<Periode>>{
    return this.http.get<Array<Periode>>(this.urlApi)
  }

  addPeriode(p: Periode): Observable<Periode> {
    return this.http.post<Periode>(this.urlApi, p);
  }
  
  updatePeriode(p: Periode): Observable<Periode> {
    return this.http.put<Periode>(this.urlApi + '/' + p.position, this.httpOptions).
      pipe()  }
  

  
  private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // Return an observable with a user-facing error message.
  return throwError(
    'Something bad happened; please try again later.');
}

}
