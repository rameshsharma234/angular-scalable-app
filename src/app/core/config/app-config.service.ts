import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  baseUrl = 'http://swapi.py4e.com/api/';
}
