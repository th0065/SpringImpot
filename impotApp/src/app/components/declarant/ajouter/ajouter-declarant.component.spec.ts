import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AjouterDeclarantComponent } from './ajouter-declarant.component';

describe('AjouterDeclarantComponentComponent', () => {
  let component: AjouterDeclarantComponent;
  let fixture: ComponentFixture<AjouterDeclarantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterDeclarantComponent],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(AjouterDeclarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
