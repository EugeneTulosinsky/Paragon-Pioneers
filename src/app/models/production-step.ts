import { TreeNode } from "angular13-organization-chart";

export class ProductionStep implements TreeNode {
    private amount?: number;
    private readonly building: string;
    private readonly minutes: number;
    private readonly input: Resource[];
    private readonly output: Resource;
    children: ProductionStep[];

    constructor(building: string, minutes: number, input: Resource[], output: Resource, children: ProductionStep[], amount?: number) {
        this.amount = amount;
        this.building = building;
        this.minutes = minutes;
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

    public getChildren() {
        return this.children;
    }

    public setAmount(amount: number) {
        this.amount = amount;
    }
}

export class Resource {
    amount: number;
    material: string;

    constructor(material: string, amount: number) {
        this.amount = amount;
        this.material = material;
    }

    public toString() {
        return this.amount + ' ' + this.material;
    }
}