import { Component, OnInit } from '@angular/core';
import { Production } from '../models/production';
import { ProductionStep, Ressource } from '../models/production-step';

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
    let stepOne = new ProductionStep('Flachsfarm', 2, [new Ressource('Flachsfeld', 8)], new Ressource('Flachs', 1), []);
    let stepTwo = new ProductionStep('Leinenspinnerei', 2, [new Ressource('Flachs', 2)], new Ressource('Leinenstoff', 1), [stepOne]);
    let productionLinen = new Production('Leinenstoff', stepTwo);
    
    stepOne = new ProductionStep('Flachsfarm', 2, [new Ressource('Flachsfeld', 8)], new Ressource('Flachs', 1), []);
    stepTwo = new ProductionStep('Seilerei', 2, [new Ressource('Flachs', 1)], new Ressource('Seile', 1), [stepOne]);
    let productionRope = new Production('Leinenstoff', stepTwo);

    this.productionList.push(productionLinen);
    this.productionList.push(productionRope);
  }
}
