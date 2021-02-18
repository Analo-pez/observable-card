import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PaymentComponent } from './components/payment/payment.component';
import { TripComponent } from './components/trip/trip.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PaymentComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
