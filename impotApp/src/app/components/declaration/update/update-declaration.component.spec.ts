import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDeclarationComponent } from './update-declaration.component';

describe('UpdateDeclarationComponent', () => {
  let component: UpdateDeclarationComponent;
  let fixture: ComponentFixture<UpdateDeclarationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDeclarationComponent]
    });
    fixture = TestBed.createComponent(UpdateDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
