class ProductionStep {
    private readonly amount: number;
    private readonly minutes: number;
    private readonly input: number;
    private readonly output: number;

    constructor(amount: number, minutes: number, input: number = 0, output: number = 0) {
        this.amount = amount;
        this.minutes = minutes;
        this.input = input;
        this.output = output;
    }

    public getAmount() {
        return this.amount;
    }

    public getMinutes() {
        return this.minutes;
    }

    public getInput() {
        return this.input;
    }

    public getOutput() {
        return this.output;
    }
}