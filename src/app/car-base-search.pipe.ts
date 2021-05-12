import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carBaseSearch'
})
export class CarBaseSearchPipe implements PipeTransform {

  transform(values: any[],sTerm:string):any[]  {
    if(!sTerm)
    return values;
    return values.filter(val=>
      val.cmain.toLowerCase().indexOf(sTerm.toLowerCase())!==-1)
    }
  }
