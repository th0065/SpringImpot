import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeclarantComponent } from './list-declarant.component';

describe('ListDeclarantComponent', () => {
  let component: ListDeclarantComponent;
  let fixture: ComponentFixture<ListDeclarantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeclarantComponent]
    });
    fixture = TestBed.createComponent(ListDeclarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
