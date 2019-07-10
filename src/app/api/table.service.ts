import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

//import { Observable } from  'rxjs/Observable';

//import  'rxjs/add/operator/catch';

//import  'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class TableService {


  items: Array<any> = [
    {
      'id': "1",
      'title': "Example 1",
      'description': 'description 1'
    },
    {
      'id': "2",
      'title': "Example 2",
      'description': 'description 2'
    },
    {
      'id': "3",
      'title': "Example 3",
      'description': 'description 3'
    },
    {
      'id': "4",
      'title': "Example 4",
      'description': 'description 4'
    },
    {
      'id': "5",
      'title': "Need a more complex app?",
      'description': 'Check the Ionic 4 Full Starter App.'
    }
  ]

  baseUrl: string = "http://localhost:55666";

  constructor(private  http: HttpClient) { }

  public getItems(){
    return this.items;
  }

  public  getPay(){
    return this.http.get(this.baseUrl + '/payments.json');
  }

}
