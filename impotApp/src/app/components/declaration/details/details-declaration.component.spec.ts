import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDeclarationComponent } from './details-declaration.component';

describe('DetailsPersonneComponent', () => {
  let component: DetailsDeclarationComponent;
  let fixture: ComponentFixture<DetailsDeclarationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsDeclarationComponent]
    });
    fixture = TestBed.createComponent(DetailsDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
