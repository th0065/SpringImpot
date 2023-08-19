import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AjouterDeclarationComponent } from './ajouter-declaration.component';

describe('AjouterDeclarationComponent', () => {
  let component: AjouterDeclarationComponent;
  let fixture: ComponentFixture<AjouterDeclarationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDeclarationComponent],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(AjouterDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
