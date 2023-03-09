import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSheetComponent } from './icon-sheet.component';

describe('IconSheetComponent', () => {
  let component: IconSheetComponent;
  let fixture: ComponentFixture<IconSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
