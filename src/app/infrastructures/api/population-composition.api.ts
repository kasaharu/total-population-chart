import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PopulationComposition } from '../../domain/population-composition';

interface ResponseType {
  message: string | null;
  result: PopulationComposition;
}

// TODO: PrefectureApi と共通化する
// TODO: environment を直接呼ばずに AppConfig を経由する
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': environment.apiKey,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PopulationCompositionApi {
  constructor(private _http: HttpClient) {}

  getPopulationComposition(prefCode: number): Observable<PopulationComposition> {
    return this._http
      .get<ResponseType>(`${environment.apiEndpoint}/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`, httpOptions)
      .pipe(map((res) => res.result));
  }
}
