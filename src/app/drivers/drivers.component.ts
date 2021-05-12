import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FetchDropdownListService } from '../fetch-dropdown-list.service';
declare var $: any;
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit,AfterViewInit {
  carbaseDrops;
  drops;
  carbaseSelected;
  sTerm;
  constructor(private cds: FetchDropdownListService) {
    this.cds.fetchCarbaseDrop().subscribe(data => {
      this.drops = data;
    })
  }
  ngAfterViewInit(): void {
    $('.car-base-selected').css({"display":"block"})
  }
  hdlKey(){
    this.carbaseDrops = document.querySelectorAll(".car-base-opts");
    this.carbaseDrops.forEach(el => {
      el.addEventListener('click', () => {
        this.carbaseSelected[0].innerHTML=el.querySelector('h6').innerHTML;
        $('.car-base-opts-wr')[0].classList.remove('carbase-show')
      })
    })
  }
  ngOnInit(): void {
  
  }
  hideDrop(){
    $('.car-base-selected').css({"display":"none"})
  }
  openActionDropdown() {
    let drop = $(".dropdown-menu")[0];
    drop.classList.toggle("drop-show");
  }
  openCarbaseDropdown() {
    $('.car-base-opts-wr')[0].classList.toggle('carbase-show')
    this.carbaseSelected=$('.car-base-selected')
    this.carbaseDrops = document.querySelectorAll(".car-base-opts");
    this.carbaseDrops.forEach(el => {
      el.addEventListener('click', () => {
        this.carbaseSelected[0].innerHTML=el.querySelector('h6').innerHTML;
        $('.car-base-opts-wr')[0].classList.remove('carbase-show')
      })
    })
  }
}
