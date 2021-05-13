import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
public searchSubject=new Subject();

  constructor() { }
  sendSearchTerm(term){
this.searchSubject.next(term);
  }
 
}
