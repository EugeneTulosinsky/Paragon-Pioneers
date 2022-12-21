import { Production } from './production';
import { ProductionStep, Resource } from '../models/production-step';

describe('Production', () => {
  let production: Production;
  let rootStep: ProductionStep;

  beforeEach(() => {
    rootStep = new ProductionStep('Flachsfarm', 2, [new Resource('Flachsfeld', 8)], new Resource('Flachs', 1), []);
    production = new Production('test production', rootStep);
  });

  it('should create an instance', () => {
    expect(production).toBeTruthy();
  });

  it('should have a root step', () => {
    expect(production.getRoot()).toEqual(rootStep);
  });

  it('should have a name', () => {
    expect(production.getName()).toEqual('test production');
  });
});