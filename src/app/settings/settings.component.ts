import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
cs=[0,1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
