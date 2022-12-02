import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Item, ITEMS} from "../data/materials";

@Component({
  selector: 'app-auto-completion',
  templateUrl: './auto-completion.component.html',
  styleUrls: ['./auto-completion.component.css'],
})
export class AutoCompletionComponent implements OnInit {
  private items = ITEMS;
  public itemCtrl = new FormControl('');
  public filteredItems: Observable<Item[]>;

  constructor() {
    this.filteredItems = this.itemCtrl.valueChanges.pipe(
      startWith(''),
      map(item => (item ? this._filterItems(item) : this.items.slice())),
    );
  }

  private _filterItems(value: string): Item[] {
    const filterValue = value.toLowerCase();

    return this.items.filter(item => item.name.toLowerCase().includes(filterValue));
  }

  ngOnInit(): void {
  }
}
