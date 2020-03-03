import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(apis: any[], searchAPI: string): any[] {
    if(!apis) return [];
    if(!searchAPI) return apis;

    searchAPI = searchAPI.toLowerCase();

    return apis.filter( api => {
      return api.API.toLowerCase().includes(searchAPI) || 
        api.Description.toLowerCase().includes(searchAPI) || 
        api.Category.toLowerCase().includes(searchAPI);
    });
   }
}