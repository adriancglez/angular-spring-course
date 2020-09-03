import { Injectable } from '@angular/core';
import { formatDate, DatePipe, registerLocaleData } from "@angular/common";
import { Customer } from '../models/customer';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError, tap } from "rxjs/operators";
import swal from 'sweetalert2';
import { Router } from "@angular/router";

@Injectable()
export class CustomersService {

  private urlEndPoint: string = 'http://localhost:9001/api/clientes';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  public getCustomers(page: number): Observable<any> {
    return this.httpClient.get(this.urlEndPoint + '/page/' + page).pipe(
      tap((response: any) => {
        (response.content as Customer[]).forEach(customer => {
        });
      }),
      map((response: any) => {
        (response.content as Customer[]).map(customer => {
          customer.nombre = customer.nombre.toUpperCase();
          // let datePipe = new DatePipe('es');
          /*customer.createAt = datePipe.transform(customer.createAt, 'EEEE dd, MMMM yyyy');*/
          /*customer.createAt = formatDate(customer.createAt, 'EEEE dd, MMM yyyy', 'en-US');*/
          return customer;
        });
        return response;
      }),
      tap(response => {
        (response.content as Customer[]).forEach(customer => {
        });
      })
    );
  }

  public create(customer: Customer): Observable<Customer> {
    return this.httpClient.post(this.urlEndPoint, customer, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.cliente as Customer),
      catchError(err => {

        if(err.status == 400) {
          return throwError(err);
        }

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

        if(err.status == 400) {
          return throwError(err);
        }

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
