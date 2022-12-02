import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../models/production';
import { TreeNode } from 'angular13-organization-chart';
import { ProductionStep } from '../models/production-step';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
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
