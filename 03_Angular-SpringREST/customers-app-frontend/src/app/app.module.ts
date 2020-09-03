import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { registerLocaleData } from "@angular/common";
import localeES from "@angular/common/locales/es";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

/* Routes */
import { APP_ROUTING } from './app.routes';

/* Services */
import { CustomersService } from "./services/customers.service";

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { IndexCustomerComponent } from './components/customers/index-customer/index-customer.component';
import { FormComponent } from './components/customers/form/form.component';
import { PaginatorComponent } from './components/shared/paginator/paginator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexCustomerComponent,
    FormComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [
    CustomersService,
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
