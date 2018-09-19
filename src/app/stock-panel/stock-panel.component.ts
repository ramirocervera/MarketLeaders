import { Component, OnInit } from '@angular/core';
import { Stock } from '../model';

@Component({
  selector: 'app-stock-panel',
  templateUrl: './stock-panel.component.html',
  styles: []
})
export class StockPanelComponent implements OnInit {
  stock : Stock;
  constructor() { 
  }

  ngOnInit() {
    this.stock = this.InitialStockValues(); 
  }
  InitialStockValues(): Stock {
    let initialStock = new Stock('AGRO', 350, 13.700, 793, 14.250, 13.900
    , null, 13.650, 14.250, 13.650, 13.650, 158839, 2230857, 191)

    initialStock.getChangeinPercentage(initialStock.PreviousClose, initialStock.lastPrice)
    
    return initialStock; 
  }

}
