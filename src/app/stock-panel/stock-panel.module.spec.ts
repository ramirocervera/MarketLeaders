import { StockPanelModule } from './stock-panel.module';

describe('StockPanelModule', () => {
  let stockPanelModule: StockPanelModule;

  beforeEach(() => {
    stockPanelModule = new StockPanelModule();
  });

  it('should create an instance', () => {
    expect(stockPanelModule).toBeTruthy();
  });
});
