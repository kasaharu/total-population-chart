import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Prefecture } from '../../domain/prefecture';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': environment.apiKey,
  }),
};

interface ResponseType {
  message: string | null;
  result: Prefecture[];
}

@Injectable({
  providedIn: 'root',
})
export class PrefectureApi {
  constructor(private http: HttpClient) {}

  getPrefectures(): Observable<Prefecture[]> {
    return this.http.get<ResponseType>(`${environment.apiEndpoint}/api/v1/prefectures`, httpOptions).pipe(map((res) => res.result));
  }
}
