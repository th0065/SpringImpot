import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DeclarantService } from '../../../services/declarant.service';


@Component({
  selector: 'app-details-declarant',
  templateUrl: './details-declarant.component.html',
  styleUrls: ['./details-declarant.component.css']
})
export class DetailsDeclarantComponent  {
  declarant: any = [];
  detailsForm: FormGroup;
  
  
  constructor(
    private actRoute: ActivatedRoute,    
    public declarantService: DeclarantService,
    public fb: FormBuilder,
    
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.declarantService.getDeclarant(id).subscribe((data) => {
      this.detailsForm = this.fb.group({
        raisonSociale: [data.raisonSociale],
        email: [data.email],
        adresse: [data.adresse],
        telephone: [data.telephone]
      })
    })
  }
 
 
}