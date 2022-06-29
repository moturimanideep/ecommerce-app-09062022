import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(sourceArray: Array<any>, inputString: string): Array<any> {
    return sourceArray.filter((product) =>  product.name.toLowerCase().includes(inputString.toLowerCase()));
  }

}
