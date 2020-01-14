import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TypeSummaryComponent } from './components/type-summary/type-summary.component';
import { HeadingSummaryComponent } from './components/heading-summary/heading-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    TypeSummaryComponent,
    HeadingSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
