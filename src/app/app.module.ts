import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyDisplayComponent } from './currency-display/currency-display.component';
import { TableComponent } from './currency-display/table/table.component';
import { GraphComponent } from './currency-display/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyDisplayComponent,
    TableComponent,
    GraphComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatSelectFilterModule,
    MatTableModule,
    MatButtonToggleModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
