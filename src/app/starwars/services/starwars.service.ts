import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(
    private _httpService: HttpService
  ) { }

  getStarWarsList(args): Observable<any> {
    const opts = {
      type: 'GET',
      data: args
    };
    return this._httpService.api('people', opts);
  }

  getstarWarDetail(args): Observable<any> {
    const opts = {
      type: 'GET',
      data: {}
    };
    return this._httpService.api('people/'+ args.id, opts);
  }

  getFilmData(url): Observable<any> {
    const opts = {
      type: 'GET',
      data: {}
    };
    return this._httpService.api(url, opts);
  }
}
