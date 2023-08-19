import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PaiementService } from '../../../services/paiement.service';


@Component({
  selector: 'app-details-paiement',
  templateUrl: './details-paiement.component.html',
  styleUrls: ['./details-paiement.component.css']
})
export class DetailsPaiementComponent  {
  paiement: any = [];
  detailsForm: FormGroup;
  declarations: any = [];

  
  
  constructor(
    private actRoute: ActivatedRoute,    
    public paiementService: PaiementService,
    public fb: FormBuilder,
    
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.paiementService.getPaiement(id).subscribe((data) => {
      this.detailsForm = this.fb.group({
        datePaiement: [data.datePaiement],
        montantPaiement: [data.montantPaiement],
        declaration: [data.declaration],
        
      });
      this.declarations=data.declaration;
      console.log(this.declarations);
    })
  }
 
 
}