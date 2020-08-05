import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

/* Routes */
import { APP_ROUTING } from './app.routes';

/* Services */
import { CustomersService } from "./services/customers.service";

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IndexCustomerComponent } from './components/customers/index-customer/index-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexCustomerComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
