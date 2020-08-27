import { RouterModule, Routes } from '@angular/router';
import { IndexCustomerComponent } from "./components/customers/index-customer/index-customer.component";
import { FormComponent } from "./components/customers/form/form.component";

const APP_ROUTES: Routes = [
  { path: 'customer', component: IndexCustomerComponent },
  { path: 'customer/page/:page', component: IndexCustomerComponent },
  { path: 'customer/form', component: FormComponent },
  { path: 'customer/form/:id', component: FormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'customer' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
