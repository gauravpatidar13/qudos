import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from './shared.service';
import { SearchCountService } from './search-count.service';

@Pipe({
  name: 'passengersSearch'
})
export class PassengersSearchPipe implements PipeTransform {
traList=[];
constructor(private ss:SharedService,private sc:SearchCountService){

}
  transform(values: any[],sTerm:string):any[]  {
    if(!sTerm)
    return values;
    this.traList= values.filter(val=>
      val.pname.toLowerCase().indexOf(sTerm.toLowerCase())!==-1||
      val.pemail.toLowerCase().indexOf(sTerm.toLowerCase())!==-1)
this.sc.getPassengersFilterList(this.traList.length.toString())
    return this.traList;
    }
}
