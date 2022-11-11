class Production {
    private readonly steps: Array<ProductionStep>;

    constructor() {
        this.steps = [];
    }

    public add(step: ProductionStep) {
        this.steps.push(step);
    }

    public getSteps() {
        return this.steps;
    }
}