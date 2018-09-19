import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockPanelComponent } from './stock-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StockPanelComponent],
  exports:[StockPanelComponent]
})
export class StockPanelModule { }
