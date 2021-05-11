import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDropdownListService {

  constructor(private http:HttpClient) { }
  fetchDropdownList(){
return this.http.get('/assets/data/dropdown.json');
  }
  fetchData(){
    return this.http.get('/assets/data/data.json');
      }
}
