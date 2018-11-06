import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/userDetail.component';
import { PaymentDetailComponent } from './payments/payment-detail.component';
import { PaymentsComponent } from './payments/payments.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    PaymentDetailComponent,
    PaymentsComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
