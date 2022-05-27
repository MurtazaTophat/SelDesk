import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './mat/mat.module';
import { FormsModule } from '@angular/forms';
import { NewbookingComponent } from './newbooking/newbooking.component';
import { PaymentComponent } from './payment/payment.component';
import { QuicksaleComponent } from './quicksale/quicksale.component';
import { OrdermoreComponent } from './ordermore/ordermore.component';
import { OrderlistComponent } from './orderlist/orderlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NewbookingComponent,
    PaymentComponent,
    QuicksaleComponent,
    OrdermoreComponent,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
