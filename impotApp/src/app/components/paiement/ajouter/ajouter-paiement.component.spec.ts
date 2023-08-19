import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AjouterPaiementComponent } from './ajouter-paiement.component';

describe('AjouterPaiementComponent', () => {
  let component: AjouterPaiementComponent;
  let fixture: ComponentFixture<AjouterPaiementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterPaiementComponent],
      imports:[
        ReactiveFormsModule
      ]
    });
    fixture = TestBed.createComponent(AjouterPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
