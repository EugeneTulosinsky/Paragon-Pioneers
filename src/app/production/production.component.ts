import { Component, OnInit, Input } from '@angular/core';
import { Production } from '../models/production';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  @Input() production!: Production;

  constructor() { }

  ngOnInit(): void {
  }

}
