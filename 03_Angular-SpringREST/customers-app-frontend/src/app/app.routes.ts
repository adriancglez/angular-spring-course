import { RouterModule, Routes } from '@angular/router';
import { IndexCustomerComponent } from "./components/customers/index-customer/index-customer.component";

const APP_ROUTES: Routes = [
  { path: 'home', component: IndexCustomerComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
