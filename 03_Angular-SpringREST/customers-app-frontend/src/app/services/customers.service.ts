import {Injectable} from '@angular/core';
import {Customer} from '../models/customer';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import swal from 'sweetalert2';
import {Router} from "@angular/router";

@Injectable()
export class CustomersService {

  private urlEndPoint: string = 'http://localhost:9001/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Customer[])
    );
  }

  public create(customer: Customer): Observable<Customer> {
    return this.httpClient.post(this.urlEndPoint, customer, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Customer),
      catchError(err => {
        console.log(err.error.mensaje);
        swal.fire(err.error['mensaje'], err.error['error'], 'error');
        return throwError(err);
      })
    );
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(err => {
        this.router.navigate(['/customer']);
        console.log(err.error.mensaje);
        swal.fire('Error al editar', err.error.mensaje, 'error');
        return throwError(err);
      })
    );
  }

  public update(customer: Customer): Observable<Customer> {
    return this.httpClient.put(`${this.urlEndPoint}/${customer.id}`, customer, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Customer),
      catchError(err => {
        console.log(err.error.mensaje);
        swal.fire(err.error['mensaje'], err.error['error'], 'error');
        return throwError(err);
      })
    );
  }

  public delete(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(err => {
        console.log(err.error.mensaje);
        swal.fire(err.error['mensaje'], err.error['error'], 'error');
        return throwError(err);
      })
    );
  }
}
