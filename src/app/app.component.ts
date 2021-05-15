import { Component } from '@angular/core';
import { SharedService } from './shared.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amaz';
  onResize(ev){
    let w;
w=ev.target.innerWidth
// if(w>767&&!this.flag){
// this.showSideMenu()
// }
// else if(w<767&&this.flag){
//   $('#sidecontent').css({"display":"flex"})
//   this.showSideMenu()
// }
  }
  constructor(private ss:SharedService){
    this.ss.sendCmd.subscribe(data=>{
      console.log('cmd')
      this.showSideMenu();
    })
  }
  public flag=false;
  showSideMenu(){ 
    this.flag=!this.flag;
    if(this.flag)
    {
      console.log(this.flag)
$('app-sidebar').css({"display":"block"})
    $('#menu').css({"display":"none"})
    $('#close').css({"display":"block"})
    $('.menu-wrapper').css({"left":"unset"})
    $('.menu-wrapper').css({"right":"40px"})
    $('#sidecontent').css({"display":"none"})

}else{
  console.log(this.flag)
  $('app-sidebar').css({"display":"none"})
  $('#menu').css({"display":"block"})
  $('#close').css({"display":"none"})
  $('.menu-wrapper').css({"left":"15px"})
    $('.menu-wrapper').css({"right":"unset"})
  $('#sidecontent').css({"display":"unset"})
}
  }
}
