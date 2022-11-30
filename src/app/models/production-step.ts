export class ProductionStep {
    private readonly amount: number;
    private readonly minutes: number;
    private readonly input: number;
    private readonly output: number;
    private readonly inputMaterial: string;
    private readonly outputMaterial: string;

    constructor(amount: number, minutes: number, inputMaterial: string, outputMaterial: string, input: number = 1, output: number = 1) {
        this.amount = amount;
        this.minutes = minutes;
        this.inputMaterial = inputMaterial;
        this.outputMaterial = outputMaterial;
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

    public getInputMaterial() {
        return this.inputMaterial;
    }

    public getOutputMaterial() {
        return this.outputMaterial;
    }
}