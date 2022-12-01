import { TreeNode } from "angular13-organization-chart";

export class ProductionStep implements TreeNode {
    private readonly amount?: number;
    private readonly building: string;
    private readonly minutes: number;
    private readonly input: number;
    private readonly output: number;
    private readonly inputMaterial: string[];
    private readonly outputMaterial: string;
    children: ProductionStep[];

    constructor(building: string, minutes: number, inputMaterial: string[], outputMaterial: string, children: ProductionStep[], input: number = 1, output: number = 1, amount?: number, ) {
        this.amount = amount;
        this.building = building;
        this.minutes = minutes;
        this.inputMaterial = inputMaterial;
        this.outputMaterial = outputMaterial;
        this.input = input;
        this.output = output;
        this.children = children;
    }

    public getAmount() {
        return this.amount;
    }

    public getBuilding() {
        return this.building;
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

    public getInputMaterial() {
        return this.inputMaterial;
    }

    public getOutputMaterial() {
        return this.outputMaterial;
    }
}