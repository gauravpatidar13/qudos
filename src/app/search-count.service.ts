import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCountService {
  public passFilterSubject=new Subject();
  constructor() { }
  getPassengersFilterList(len){
    this.passFilterSubject.next(len)
      }
}
