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
  constructor(private fdl: FetchDropdownListService) {
    this.fdl.fetchDropdownList().subscribe(data => {
      this.opts = data;
    })

  }
  change() {
    console.log('change tab')
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    $('a[data-toggle="tab"]').click(function () {
      alert($(this))
    })

  }
  openModel1() {
    $('#exa').css({ "display": "block" })
    let selected = document.querySelector('.selected');
    let optionsContainer = document.querySelector('.options-container');
    let optionsList = document.querySelectorAll(".option");
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
      o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML;
        console.log(optionsContainer)
        optionsContainer.classList.remove('active')
      })
    })
  }
  heyChange() {
    let selected = document.querySelector('.selected');
    let optionsContainer = document.querySelector('.options-container');
    let optionsList = document.querySelectorAll(".option");
    selected.addEventListener("click", () => {
      optionsContainer.classList.toggle("active");
    });

    optionsList.forEach(o => {
      o.addEventListener('click', () => {
        selected.innerHTML = o.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active')
      })
    })
  }
}
