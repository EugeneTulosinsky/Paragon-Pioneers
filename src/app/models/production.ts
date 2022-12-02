import { ProductionStep } from '../models/production-step';

export class Production {
    private readonly root: ProductionStep;
    private readonly name: string;

    constructor(name: string, root: ProductionStep) {
        this.root = root;
        this.name = name;
    }

    public getRoot() {
        return this.root;
    }

    public getName() {
        return this.name;
    }

    public resolveAmounts() {

    }
}