import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { PiechartComponent } from './piechart/piechart.component';
import { GeochartComponent } from './geochart/geochart.component';
@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    GeochartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
