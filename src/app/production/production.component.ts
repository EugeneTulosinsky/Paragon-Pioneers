import { Component, OnInit, Input } from '@angular/core';

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
