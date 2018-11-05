import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/userDetail.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    PaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
