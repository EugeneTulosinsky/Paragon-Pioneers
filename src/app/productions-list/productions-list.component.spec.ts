import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionsListComponent } from './productions-list.component';

describe('ProductionsListComponent', () => {
  let component: ProductionsListComponent;
  let fixture: ComponentFixture<ProductionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
