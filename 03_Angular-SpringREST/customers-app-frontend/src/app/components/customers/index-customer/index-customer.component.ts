import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../../../services/customers.service";
import {Customer} from "../../../models/customer";
import Swal from "sweetalert2";

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.css']
})
export class IndexCustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe(
      customers => this.customers = customers
    );
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
