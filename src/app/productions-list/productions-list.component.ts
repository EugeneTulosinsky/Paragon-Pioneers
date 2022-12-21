import { Component, OnInit } from '@angular/core';
import { Production } from '../models/production';
import { ProductionStep, Resource } from '../models/production-step';

@Component({
  selector: 'app-productions-list',
  templateUrl: './productions-list.component.html',
  styleUrls: ['./productions-list.component.css']
})
export class ProductionsListComponent implements OnInit {
  public productionList: Array<Production> = [];

  constructor() {
    this.initializeList();
  }

  ngOnInit(): void {
  }

  private initializeList() {
    let stepOne = new ProductionStep('Flachsfarm', 2, [new Resource('Flachsfeld', 8)], new Resource('Flachs', 1), [], 2);
    let stepTwo = new ProductionStep('Leinenspinnerei', 2, [new Resource('Flachs', 2)], new Resource('Leinenstoff', 1), [stepOne], 1);
    let productionLinen = new Production('Leinenstoff', stepTwo);
    
    stepOne = new ProductionStep('Flachsfarm', 2, [new Resource('Flachsfeld', 8)], new Resource('Flachs', 1), []);
    stepTwo = new ProductionStep('Seilerei', 2, [new Resource('Flachs', 1)], new Resource('Seile', 1), [stepOne]);
    let productionRope = new Production('Seile', stepTwo);

    let s1 = new ProductionStep('Flachsfarm', 2, [new Resource('Flachsfeld', 8)], new Resource('Flachs', 1), []);
    let s2 = new ProductionStep('Seilerei', 2, [new Resource('Flachs', 1)], new Resource('Seile', 1), [s1]);
    let s3 = new ProductionStep('Seilerei', 2, [new Resource('Flachs', 1)], new Resource('Seile', 1), [s1]);
    let p = new Production('Leinenstoff', stepTwo);

    this.productionList.push(productionLinen);
    this.productionList.push(productionRope);
  }
}
