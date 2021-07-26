import { HttpClient, HttpParams, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { ResponseObject, Coin, TableMetrics, GraphMetrics } from "./interfaces";

@Injectable({
  providedIn: 'root',
})

export class CurrencyService {
  private endpoint: string = "https://api.lunarcrush.com/v2?";
  private key: string =  "h58hdm0vu2pevpovb4s48v";

  constructor(private http: HttpClient){
  }

  getCoins(): Observable<Coin[]>{
    let api = `${this.endpoint}data=meta&key=${this.key}`;

    return this.http.get<ResponseObject>(api)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  getTableMetrics(symbols: string[]): Observable<TableMetrics[]>{
    let api = `${this.endpoint}data=assets&key=${this.key}&symbol=${symbols.join(",")}`;

    return this.http.get<ResponseObject>(api)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  getDayGraphMetrics(symbols: string[]): Observable<GraphMetrics[]>{
    let api = `${this.endpoint}data=assets&key=${this.key}&symbol=${symbols.join(",")}`;

    return this.http.get<ResponseObject>(api)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  getWeekGraphMetrics(symbols: string[]): Observable<GraphMetrics[]>{
    let api = `${this.endpoint}data=assets&key=${this.key}&symbol=${symbols.join(",")}&data_points=7&interval=day`;

    return this.http.get<ResponseObject>(api)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  getMonthGraphMetrics(symbols: string[]): Observable<GraphMetrics[]>{
    let api = `${this.endpoint}data=assets&key=${this.key}&symbol=${symbols.join(",")}&data_points=30&interval=day`;

    return this.http.get<ResponseObject>(api)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}
