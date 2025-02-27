import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule} from "@angular/common/http";
import { TooltipModule} from "ngx-bootstrap";
import { ChartModule } from "angular-highcharts";

import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TotalBilanceComponent } from './component/total-bilance/total-bilance.component';
import { PaymentBilanceComponent} from "./component/payment-bilance/payment-bilance.component";
import { PaymentDetailComponent } from './component/payment-detail/payment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    MenuComponent,
    TotalBilanceComponent,
    PaymentBilanceComponent,
    PaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
