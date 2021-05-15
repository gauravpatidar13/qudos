import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 viewport_width;
  onResize(ev){
    console.log(ev.target.innerWidth)
this.viewport_width=ev.target.innerWidth;
  }
  constructor(private ss:SharedService) { }

  ngOnInit(): void {
  }
  closeMenu(){
    if(this.viewport_width<767)
this.ss.sendCmdTerm(false);
  }
}
