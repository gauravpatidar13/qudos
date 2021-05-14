import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FetchDropdownListService } from '../fetch-dropdown-list.service';
declare var $: any;

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css'],

})
export class PassengersComponent implements OnInit, AfterViewInit {
  searchTerm;
  opts;
  p = 0;
  docs;
  one=true;
  selected;optionsContainer;optionsList;
  constructor(private fdl: FetchDropdownListService) {
    this.fdl.fetchDropdownList().subscribe(data => {
      this.opts = data;
    })
    this.fdl.fetchData().subscribe(data => {
      this.docs = data;
    })
  }
 
  ngAfterViewInit(): void {
    let drop = $(".dropdown-menu")[0];
    let lists = $(".dropdown-item");
 
    for (let i = 0; lists.length; i++) {
      lists[i].addEventListener("click", () => {
      drop.classList.toggle("drop-show")
      })
    }
  }
  ngOnInit(): void {
    $('a[data-toggle="tab"]').click(function () {
      alert($(this))
    })

  }
  openModel1() {
    this.selected = document.querySelector('.selected');
    this.optionsContainer = document.querySelector('.options-container');
  this.optionsList = document.querySelectorAll(".option");
  this.selected.addEventListener("click", () => {
    this.optionsContainer.classList.toggle("active");
  });

  this.optionsList.forEach(o => {
    o.addEventListener('click', () => {
      this.selected.innerHTML = o.querySelector('label').innerHTML;
      this.optionsContainer.classList.remove('active')
    })
  })
    $('#exa').css({ "display": "block" })
  }
  closeModel(){
    $('#exa').css({ "display": "none" })
  }
  saveModel(){
    $('#exa').css({ "display": "none" })
  }
  heyChange() {
  
    // this.selected = document.querySelector('.selected');
    this.optionsContainer = document.querySelector('.options-container');
    this.optionsList = document.querySelectorAll(".option");
    // this.selected.addEventListener("click", () => {
    //   this.optionsContainer.classList.toggle("active");
    // });

    this.optionsList.forEach(o => {
      o.addEventListener('click', () => {
        this.selected.innerHTML = o.querySelector('label').innerHTML;
        this.optionsContainer.classList.remove('active')
      })
    })
  }
  openActionDropdown() {
    let drop = $(".dropdown-menu")[0];
    drop.classList.toggle("drop-show");
  }
}
