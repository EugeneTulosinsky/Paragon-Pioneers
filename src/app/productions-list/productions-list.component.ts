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
    let productionLinen = new Production('Leinenstoff');
    productionLinen.add(new ProductionStep(2, 2, 'Flachsfelf', 'Flachs', 8, 1));
    productionLinen.add(new ProductionStep(1, 2, 'Flachs', 'Leinenstoff', 2, 1));
    
    let productionRope = new Production('Seile');
    productionRope.add(new ProductionStep(1, 2, 'Flachsfelf', 'Flachs', 8, 1));
    productionRope.add(new ProductionStep(1, 2, 'Flachs', 'Seile', 1, 1));

    this.productionList.push(productionLinen);
    this.productionList.push(productionRope);
  }
}
