import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carSearch'
})
export class CarSearchPipe implements PipeTransform {

  transform(values: any[],sTerm:string):any[]  {
    if(!sTerm)
    return values;
    return values.filter(val=>
      val.type.toLowerCase().indexOf(sTerm.toLowerCase())!==-1)
    }

}
