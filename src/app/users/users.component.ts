import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FetchDropdownListService } from '../fetch-dropdown-list.service';
import { SearchCountService } from '../search-count.service';
declare var $:any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
searchTerm;
passengers;
scount;
  constructor(private ss:SharedService,
    private fd:FetchDropdownListService,
    private sc:SearchCountService) { }

  ngOnInit(): void {
    this.sc.passFilterSubject.subscribe(data=>{
      this.scount=data;
      console.log($('#mv'))
      $('#mv')[0].innerText=`View ${this.scount} results`
    })
    this.ss.searchSubject.subscribe(data=>{
      console.log(data)
this.searchTerm=data;
    })
    this.fd.fetchPassengers().subscribe(data=>{
      this.passengers=data;
    })
    
  }

}
