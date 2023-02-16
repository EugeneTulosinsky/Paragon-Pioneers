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

    let s5 = new ProductionStep('Kartoffelfarm', 1, [new Resource('Kartoffelfeld', 4)], new Resource('Schnaps', 1), []);
    let s4 = new ProductionStep('Imkerei', 4, [new Resource('Grasfeld', 8)], new Resource('Honig', 1), []);
    let s3 = new ProductionStep('Likördestille', 2, [new Resource('Honig', 1), new Resource('Schnaps', 2)], new Resource('Likör', 1), [s4, s5]);
    let s2 = new ProductionStep('Hummerfänger', 0.666666, [new Resource('Korallenrifffeld', 1)], new Resource('Hummer', 1), []);
    let s1 = new ProductionStep('Edelküche', 1.33333, [new Resource('Hummer', 2), new Resource('Likör', 1)], new Resource('Festmahl', 2), [s2, s3]);
    let p = new Production('Festmähler', s1);

    // this.productionList.push(productionLinen);
    // this.productionList.push(productionRope);
    this.productionList.push(p);

    this.productionList.forEach(element => {
      let array = element.resolveAmounts();
      element.fixAmounts(array);
    });
  }
}
