import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { ApiResponse } from '../../core/models/api.model';

@Component({
  selector: 'api-list',
  templateUrl: './api-list.component.html',
  styleUrls: [ './api-list.component.css' ]
})
export class ApiListComponent implements OnInit  {
 
  apis: ApiResponse[];

  constructor(private apiService: ApiService){

  }

  ngOnInit(){
    this.apiService.getApiResponse().subscribe(
      (data: ApiResponse[]) => {
        this.apis = data; 
       }
    );
  }

  
}
