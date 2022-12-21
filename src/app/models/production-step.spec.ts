import { ProductionStep, Resource } from './production-step';

describe('ProductionStep', () => {
  let productionStep: ProductionStep;
  let input: Resource[];
  let output: Resource;

  beforeEach(() => {
    input = [new Resource('Wood', 10), new Resource('Stone', 20)];
    output = new Resource('Iron', 30);
    productionStep = new ProductionStep('Forge', 60, input, output, []);
  });

  it('should create an instance', () => {
    expect(productionStep).toBeTruthy();
  });

  it('should have a building property', () => {
    expect(productionStep.getBuilding()).toEqual('Forge');
  });

  it('should have a minutes property', () => {
    expect(productionStep.getMinutes()).toEqual(60);
  });

  it('should have an input property', () => {
    expect(productionStep.getInput()).toEqual(input);
  });

  it('should have an output property', () => {
    expect(productionStep.getOutput()).toEqual(output);
  });

  it('should have a children property', () => {
    expect(productionStep.getChildren()).toEqual([]);
  });

  it('should have an optional amount property', () => {
    productionStep = new ProductionStep('Forge', 60, input, output, [], 2);
    expect(productionStep.getAmount()).toEqual(2);
  });
});