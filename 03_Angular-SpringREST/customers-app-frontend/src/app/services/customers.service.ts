import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class CustomersService {

  private urlEndPoint: string = 'http://localhost:9001/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Customer[])
    );
  }

  public create(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.urlEndPoint, customer, {headers: this.httpHeaders});
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.urlEndPoint}/${id}`);
  }

  public update(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.urlEndPoint}/${customer.id}`, customer, {headers: this.httpHeaders});
  }

  public delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders});
  }
}
