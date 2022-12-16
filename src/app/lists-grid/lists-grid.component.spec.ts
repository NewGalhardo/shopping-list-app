import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsGridComponent } from './lists-grid.component';

describe('ListsGridComponent', () => {
  let component: ListsGridComponent;
  let fixture: ComponentFixture<ListsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
