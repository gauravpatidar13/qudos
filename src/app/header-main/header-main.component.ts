import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {
activation=true;
searchTerm;
  constructor(private ss:SharedService) { }

  ngOnInit(): void {
  }
  searchMe(){
this.ss.sendSearchTerm(this.searchTerm);
  }
}
