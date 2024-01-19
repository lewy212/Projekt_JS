import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wyszukaj'
})
export class WyszukajPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => item.title.toLowerCase().includes(searchText));
  }
}
