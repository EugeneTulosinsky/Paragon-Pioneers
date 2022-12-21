import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../models/production';
import { ProductionStep } from '../models/production-step';
import { OrgChartModule } from 'angular13-organization-chart';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css'],
})
export class ProductionComponent implements OnInit {
  @Input() production!: Production;
  tree!: ProductionStep;
  path = '../assets/';

  constructor() { }

  ngOnInit(): void {
    this.popularizeTree();
  }

  popularizeTree() {
    this.tree = this.production.getRoot();
  }
}
