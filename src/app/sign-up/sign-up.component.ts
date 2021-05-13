import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  
})
export class SignUpComponent implements OnInit,AfterViewInit {
selectedIndex="1";
  constructor() { }
  ngAfterViewInit(): void {
    let selected=document.querySelector('.selected');
    let terms=document.querySelector('.focusdiv')
    let optionsContainer=document.querySelector('.options-container');
    let optionsList=document.querySelectorAll(".option");
    selected.addEventListener("click",()=>{
      optionsContainer.classList.toggle("active");
      terms.classList.toggle('focusdivz')
     
    });
    optionsList.forEach(o=>{
      o.addEventListener('click',()=>{
        selected.innerHTML=o.querySelector('label').innerHTML;
        optionsContainer.classList.remove('active')
        terms.classList.remove('focusdivz')
      })
    })
  }

  ngOnInit(): void {
 
  }
goto2(){
this.selectedIndex="1";
}
goto3(){
  this.selectedIndex="2";
}
data(fom){
console.log(fom)
}
}
