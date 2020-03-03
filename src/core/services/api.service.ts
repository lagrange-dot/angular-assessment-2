import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  configUrl = 'https://api.publicapis.org/entries';

  getApiResponse(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(this.configUrl).pipe(
      map(x => x.entries)
    );
  }
}