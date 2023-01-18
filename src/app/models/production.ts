import { ProductionStep } from '../models/production-step';

export class Production {
    private readonly root: ProductionStep;
    private readonly name: string;

    constructor(name: string, root: ProductionStep) {
        this.root = root;
        this.root.setAmount(1);
        this.name = name;
    }

    public getRoot() {
        return this.root;
    }

    public getName() {
        return this.name;
    }

    public resolveAmounts(parentNode?: ProductionStep) {
        if (null == parentNode) {
            parentNode = this.root;
        }
        if (0 == parentNode.children.length) {
            return;
        }
        
        for (const child of parentNode.children) {
            for (const inputRessource of parentNode.getInput()) {
                if (child.getOutput().material === inputRessource.material) {
                    let parentAmount = parentNode.getAmount() ?? 1;
                    let timeMultiplier = child.getMinutes() / parentNode.getMinutes();
                    let requiredAmount = inputRessource.amount * parentAmount * timeMultiplier / child.getOutput().amount;
                    
                    child.setAmount(requiredAmount);
                    this.resolveAmounts(child);

                    break;
                }
            }
        }
    }
}