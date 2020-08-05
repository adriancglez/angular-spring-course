import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';
import {Observable, of} from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class CustomersService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private httpClient: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Customer[])
    );
  }
}
