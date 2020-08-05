import { Component, OnInit } from '@angular/core';
import { CustomersService } from "../../../services/customers.service";
import {Customer} from "../../../models/customer";

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
}
