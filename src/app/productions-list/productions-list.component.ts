import { Component, OnInit } from '@angular/core';

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
    let production = new Production();
    production.add(new ProductionStep(1, 2));

    this.productionList.push(production);
  }
}
