import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../../../services/customers.service";
import {Customer} from "../../../models/customer";
import Swal from "sweetalert2";
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.css']
})
export class IndexCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customersService: CustomersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {

      let page: number = +params.get('page');

      if (!page) {
        page = 0;
      }

      this.customersService.getCustomers(page).pipe(tap(response => {
        (response.content as Customer[]).forEach(customer => {
          console.log(customer.nombre);
        });
      })).subscribe(response => this.customers = response.content as Customer[]);
    })
  }

  public delete(customer: Customer): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `¿Seguro que desea eliminar al cliente ${customer.nombre} ${customer.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.customersService.delete(customer.id).subscribe(response => {
          this.customers = this.customers.filter( cus => cus !== customer);
          swalWithBootstrapButtons.fire(
            '¡Eliminado!',
            `El cliente ${customer.nombre} ${customer.apellido} ha sido Eliminado`,
            'success'
          );
        });
      }
    });
  }
}
