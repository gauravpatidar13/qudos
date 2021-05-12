import { Component, OnInit } from '@angular/core';
import { FetchDropdownListService } from '../fetch-dropdown-list.service';
declare var $:any;
@Component({
  selector: 'app-affilates',
  templateUrl: './affilates.component.html',
  styleUrls: ['./affilates.component.css']
})
export class AffilatesComponent implements OnInit {
  p;
  docs;
  client = { "fname": "Iran", "lname": "Gonzalae", 
  "email": "xidikli233@mail.com", "phone": "+1-3535996999",
   "rdate": "Generic", "zipcode": "676798",
  "passportno" :"USA","DMVLic":"Texas"}
  constructor(private dd: FetchDropdownListService) {
    this.dd.fetchData().subscribe(data => this.docs = data)
  }

  ngOnInit(): void {
  }
closeModel(){
  $('#exa2').css({"display":"none"})
}
openEditDetail(){
$('#exa2').css({"display":"block"})
}
saveModel(){
  $('#exa2').css({"display":"none"})
}
}
