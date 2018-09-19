export class Stock {
    constructor(
        public Symbol: string,
        public bidPrice: number,
        public bidQuantity: number,
        public askPrice: number,
        public askQuantity: number,
        public lastPrice : number,
        public ChangeinPercentage: number,
        public PriceOpen: number,
        public MinimumPrice: number,
        public MaximumPrice: number,
        public PreviousClose: number,
        public NominalVolumen: number,
        public OperatedAmount: number,
        public OperationQuantity: number) {
    }

    getChangeinPercentage(PreviousClose : number, lastPrice : number) : number {
        return  (PreviousClose - lastPrice) / lastPrice * 100;
    }
}