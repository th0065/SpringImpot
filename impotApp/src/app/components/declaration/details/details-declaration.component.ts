import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DeclarationService } from '../../../services/declaration.service';
import { Declarant } from 'src/app/models/declarant.model';
@Component({
  selector: 'app-details-declaration',
  templateUrl: './details-declaration.component.html',
  styleUrls: ['./details-declaration.component.css']
})
export class DetailsDeclarationComponent  {
  Declaration: any = [];
 declarants: any=[];
  detailsForm: FormGroup;
  
  
  constructor(
    private actRoute: ActivatedRoute,    
    public declarationService: DeclarationService,
    public fb: FormBuilder,
    
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.declarationService.getDeclaration(id).subscribe((data) => {
    
      this.detailsForm = this.fb.group({
        dateDeclaration: [data.dateDeclaration],
        montantDeclaration: [data.montantDeclaration],
        declarant: [data.declarant ],
        
      
      });
     this.declarants=data.declarant;
     console.log(this.declarants);
    });
  }
 
 
}