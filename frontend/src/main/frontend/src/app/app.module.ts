import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule} from "@angular/common/http";
import { TooltipModule} from "ngx-bootstrap";
import { ChartModule } from "angular-highcharts";

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/userDetail.component';
import { PaymentDetailComponent } from './payments/payment-detail.component';
import { PaymentsComponent } from './payments/payments.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TotalBilanceComponent } from './component/total-bilance/total-bilance.component';
import { PaymentBilanceComponent} from "./component/payment-bilance/payment-bilance.component";

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    PaymentDetailComponent,
    PaymentsComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    MenuComponent,
    TotalBilanceComponent,
    PaymentBilanceComponent
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
