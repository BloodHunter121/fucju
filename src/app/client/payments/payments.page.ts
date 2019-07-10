import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableService } from '../../api/table.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})

/*
export interface Payments {
  id: number;
  ctn: string;
  payments: any[];
}
*/

export class PaymentsPage implements OnInit {

  items: Array<any>;
  public payments : Array<any>[];

//    data: any = {};
//    table: any[] = [];

   public baseUrl: string = 'http://localhost:55666';

  constructor(public table: TableService, private httpClient	: HttpClient) {



console.log(this.showPayments());

  }

  public  getPayments(){
    return this.httpClient.get<Array<any[]>>(this.baseUrl + '/payments.json');
  }
  public showPayments() {
    this.getPayments()
      .subscribe((data: Array<any[]>) => this.payments = { ...data});
  }

  ngOnInit() {
        this.items = this.table.getItems();
//        this.items = this.getPayments();
//        this.showPayments();
        console.log('test');
  }

}
