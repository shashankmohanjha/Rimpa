import { Database } from './model/database';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Table } from './model/table';

@Injectable({
  providedIn: 'root'
})
export class DbComparisonService {

  headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  // URL: string = 'https://104.211.240.97/DBComparator/Mindtree-Hack-DBComparator/api/values';
  URL: string = 'http://104.211.240.97/DBConBackend/api/values';
  

  constructor(private httpClient: HttpClient) { }

  getDatabases(database: Database): Observable<string[]> {
    /* return this.httpClient.get<string[]>(this.URL, {
      headers: this.headers
    }).pipe(
      tap(_ => console.log("success"))
    ); */
    return this.httpClient.post<string[]>(this.URL, {
      database: database,
      dbCall: 'Database'
    }).pipe(
      tap(res => console.log("res = "+res))
    );
  }

  getTables(database : Database) : Observable<string[]> {
    return this.httpClient.post<string[]>(this.URL, database);
  }

  getColumns() {

  }

}
