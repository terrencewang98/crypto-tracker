import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesListComponent } from './currencies-list/currencies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatSelectFilterModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
