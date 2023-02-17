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

    public resolveAmounts(parentNode?: ProductionStep, nonNaturalValues: Array<number> = []): Array<number> {
        if (null == parentNode) {
            parentNode = this.root;
        }
        if (0 == parentNode.children.length) {
            return nonNaturalValues;
        }
        
        for (const child of parentNode.children) {
            for (const inputRessource of parentNode.getInput()) {
                if (child.getOutput().material === inputRessource.material) {
                    let parentAmount = parentNode.getAmount() ?? 1;

                    if (!((parentAmount >= 0.0) && (Math.floor(parentAmount) === parentAmount) && parentAmount !== Infinity)) {
                        nonNaturalValues.push(parentAmount);
                    }

                    let timeMultiplier = child.getMinutes() / parentNode.getMinutes();
                    let requiredAmount = inputRessource.amount * parentAmount * timeMultiplier / child.getOutput().amount;
                    
                    child.setAmount(Math.round(requiredAmount * 100) / 100);
                    nonNaturalValues = this.resolveAmounts(child, nonNaturalValues);

                    break;
                }
            }
        }

        return nonNaturalValues;
    }

    public fixAmounts(nonNaturalValues: Array<number>, parentNode?: ProductionStep) {
        if (nonNaturalValues.length === 0) {
            return;
        }
        let number = this.smallestMultiplier(nonNaturalValues);
        console.log(number, nonNaturalValues);
        this.multiplyAmounts(number, parentNode);
    }

    private smallestMultiplier(arr: number[]): number {
        const gcd = (...nums: number[]): number => {
            if (nums.length === 2) {
                return nums[1] === 0 ? nums[0] : gcd(nums[1], nums[0] % nums[1]);
            }
            return nums.reduce((a, b) => gcd(a, b));
        }
      
        const lcm = (a: number, b: number) => {
          return (a * b) / gcd(a, b);
        }
      
        const multiple = arr.reduce((acc, val) => lcm(acc, val), 1);
        const div = gcd.apply(null, arr);
        const result = multiple / div;
      
        return Number.isInteger(result) && result > 0 ? result : 1;
    }
    
      
      
      
    public multiplyAmounts(factor: number, parentNode?: ProductionStep) {
        if (null == parentNode) {
            parentNode = this.root;
        }
        if (parentNode === this.root) {
            let parentAmount = parentNode.getAmount() ?? 1;
            parentNode.setAmount(parentAmount * factor);
        }
        if (0 == parentNode.children.length) {
            return;
        }
        
        for (const child of parentNode.children) {
            let childAmount = child.getAmount() ?? 1;
            let requiredAmount = childAmount * factor;
            
            child.setAmount(requiredAmount);
            this.multiplyAmounts(factor, child);
        }
    }     
}
