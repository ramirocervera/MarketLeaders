import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockPanelModule } from './stock-panel/stock-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StockPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
