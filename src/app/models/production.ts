import { ProductionStep } from '../models/production-step';

export class Production {
    private readonly steps: Array<ProductionStep>;
    private readonly name: string;

    constructor(name: string) {
        this.steps = [];
        this.name = name;
    }

    public add(step: ProductionStep) {
        this.steps.push(step);
    }

    public getSteps() {
        return this.steps;
    }

    public getName() {
        return this.name;
    }
}