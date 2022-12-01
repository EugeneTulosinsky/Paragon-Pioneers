import { Component, OnInit } from '@angular/core';
import { Production } from '../models/production';
import { ProductionStep } from '../models/production-step';

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
    let stepOne = new ProductionStep('Flachsfarm', 2, ['Flachsfeld'], 'Flachs', [], 8, 1);
    let stepTwo = new ProductionStep('Leinenspinnerei', 2, ['Flachs'], 'Leinenstoff', [stepOne], 2, 1);
    let productionLinen = new Production('Leinenstoff', stepTwo);
    
    stepOne = new ProductionStep('Flachsfarm', 2, ['Flachsfeld'], 'Flachs', [], 8, 1);
    stepTwo = new ProductionStep('Seilerei', 2, ['Flachs'], 'Seile', [stepOne], 1, 1);
    let productionRope = new Production('Leinenstoff', stepTwo);

    this.productionList.push(productionLinen);
    this.productionList.push(productionRope);
  }
}
