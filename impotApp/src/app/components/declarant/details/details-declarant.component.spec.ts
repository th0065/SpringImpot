import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeclarantComponent } from './details-declarant.component';

describe('DetailsPersonneComponent', () => {
  let component: DetailsDeclarantComponent;
  let fixture: ComponentFixture<DetailsDeclarantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsDeclarantComponent]
    });
    fixture = TestBed.createComponent(DetailsDeclarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
