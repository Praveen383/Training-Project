import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistorComponent } from './registor/registor.component';
import { ProductsComponent } from './products/products.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ModelWindowComponent } from './model-window/model-window.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { EMartComponent } from './e-mart/e-mart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RadioOverviewExampleComponent } from './radio-overview-example/radio-overview-example.component';
import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistorComponent,
    ProductsComponent,
    CartItemsComponent,
    ModelWindowComponent,
    AdminComponent,
    ErrorComponent,
    EMartComponent,
    RadioOverviewExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
