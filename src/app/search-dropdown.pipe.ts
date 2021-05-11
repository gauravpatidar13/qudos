import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDropdown'
})
export class SearchDropdownPipe implements PipeTransform {

  transform(values: Object[], searchTerm:string): Object[] {
    if(!searchTerm){
      return values;
    }
    
    return values.filter((value:any)=>{
    return  (value.main.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1||value.aux.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1)
    }  )
  }
}
