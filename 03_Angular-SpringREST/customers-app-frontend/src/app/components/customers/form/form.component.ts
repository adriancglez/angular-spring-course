import { Component, OnInit } from '@angular/core';
import { Customer } from "../../../models/customer";
import {CustomersService} from "../../../services/customers.service";
import {Router, ActivatedRoute} from "@angular/router";
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public customer: Customer = new Customer();
  public title: string = "Crear Cliente";
  public errors: string[];

  constructor(private customerService: CustomersService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  public create(): void {
    this.customerService.create(this.customer).subscribe(
      response => {
        this.router.navigate(['/customer']);
        swal.fire('Nuevo Cliente', `Cliente ${response.nombre} ha sido creado con éxito`, 'success');
      },
      error => {
        this.errors = error.error.errors as string[];
        console.warn(`Código del error desde el BackEnd: ${error.status}`);
        console.table(`Lista de errores: ${error.error.errors}`);
      }
    );
  }

  public getCustomer(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id) {
        this.customerService.getCustomer(id).subscribe(customer => this.customer = customer);
      }
    });
  }

  public update(): void {
    this.customerService.update(this.customer).subscribe(
      response => {
        this.router.navigate(['/customer']);
        swal.fire('Cliente Actualizado', `El Cliente ${response.nombre} ha sido actualizado con éxito`, 'success');
      },
      error => {
        this.errors = error.error.errors as string[];
        console.warn(`Código del error desde el BackEnd: ${error.status}`);
        console.table(`Lista de errores: ${error.error.errors}`);
      }
    )
  }
}
