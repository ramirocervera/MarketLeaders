export class Stock {
    constructor(
        public Symbol: string,
        public Name: string,
        public bidPrice: number,
        public bidQuantity: number,
        public askPrice: number,
        public askQuantity: number,
        public Price: number,
        public ChangeinPercentage: number,
        public PriceOpen: number,
        public MinimumPrice: number,
        public MaximumPrice: number,
        public PreviousClose: number,
        public Volumen: number,
        public OperatedAmount: number,
        public OperationQuantity: number) {
    }
}