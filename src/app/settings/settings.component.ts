import { Component, OnInit } from '@angular/core';
import { FetchDropdownListService } from '../fetch-dropdown-list.service';
declare var $:any;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
cars;
p;
sTerm;
  constructor(private cs:FetchDropdownListService) {
    this.cs.fetchCarList().subscribe(dat=>{
      this.cars=dat;
    })
   }

  ngOnInit(): void {
  }
  closeModel(){
    $('#exa3').css({"display":"none"})
  }
  openAddCarModal(){
  $('#exa3').css({"display":"block"})
  }
  saveModel(){
    $('#exa3').css({"display":"none"})
  }
}
