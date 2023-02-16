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
        let number = this.calculateMultiplier(nonNaturalValues);
        console.log(number, nonNaturalValues);
        this.multipleAmounts(number, parentNode);
    }

    private calculateMultiplier(numbers: number[]): number {
        let smallestNatural = Number.MAX_SAFE_INTEGER;
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
          const number = numbers[i];
          if (!Number.isInteger(number)) {
            // Find the smallest integer that the number can be multiplied by
            smallestNatural = Math.min(smallestNatural, Math.ceil(number));
          }
          sum += number;
        }
        // Find the greatest common divisor of all the differences between each number and the sum
        let gcd = Math.abs(numbers[0] - sum);
        for (let i = 1; i < numbers.length; i++) {
          gcd = this.calculateGCD(Math.abs(numbers[i] - sum), gcd);
        }
        // Return the least common multiple of the smallest natural number and the greatest common divisor
        return smallestNatural * (gcd / this.calculateGCD(smallestNatural, gcd));
      }
      
      private calculateGCD(a: number, b: number): number {
        return b == 0 ? a : this.calculateGCD(b, a % b);
      }
      
      
      
    public multipleAmounts(factor: number, parentNode?: ProductionStep) {
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
            this.multipleAmounts(factor, child);
        }
    }     
}
